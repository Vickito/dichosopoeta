export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const path = url.pathname;

        if (path === "/api/login" && request.method === "POST") {
            const body = await request.json();
            const { username, password } = body;

            const query = `SELECT password FROM Login WHERE username = ?`;
            const result = await env.DB.prepare(query).bind(username).first();

            if (result && await verifyPassword(password, result.password)) {
                const sessionId = crypto.randomUUID(); // Genera un ID único para la sesión
                await env.SESSIONS.put(sessionId, username, { expirationTtl: 3600 }); // Guarda la sesión por 1 hora
                return new Response(JSON.stringify({ success: true }), {
                    status: 200,
                    headers: { "Set-Cookie": `session=${sessionId}; HttpOnly; Path=/` },
                });
            } else {
                return new Response(JSON.stringify({ success: false, error: "Credenciales incorrectas" }), { status: 401 });
            }
        }

        if (path === "/api/auth" && request.method === "GET") {
            const cookie = parseCookies(request.headers.get("Cookie"));
            const sessionId = cookie.session;
            const username = sessionId ? await env.SESSIONS.get(sessionId) : null;

            return new Response(JSON.stringify({ isAuthenticated: !!username }), { status: 200 });
        }

        if (path === "/api/logout" && request.method === "POST") {
            const cookie = parseCookies(request.headers.get("Cookie"));
            const sessionId = cookie.session;
            if (sessionId) await env.SESSIONS.delete(sessionId);
            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: { "Set-Cookie": "session=; HttpOnly; Path=/; Max-Age=0" },
            });
        }

        return new Response("Not Found", { status: 404 });
    },
};

// Helper para verificar contraseñas
async function verifyPassword(plainPassword, hashedPassword) {
    const bcrypt = await import("bcryptjs");
    return bcrypt.compare(plainPassword, hashedPassword);
}

// Helper para parsear cookies
function parseCookies(cookieString = "") {
    return cookieString.split(";").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=").map((v) => v.trim());
        acc[key] = value;
        return acc;
    }, {});
}
