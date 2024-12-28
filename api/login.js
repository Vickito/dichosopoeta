export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const path = url.pathname;

        if (path === "/api/login" && request.method === "POST") {
            const body = await request.json();
            const { username, password } = body;

            // Busca al usuario en la base de datos
            const query = `SELECT password FROM Login WHERE username = ?`;
            const result = await env.DB.prepare(query).bind(username).first();

            if (result && await verifyPassword(password, result.password)) {
                return new Response(JSON.stringify({ success: true }), { status: 200 });
            } else {
                return new Response(JSON.stringify({ success: false, error: "Credenciales incorrectas" }), { status: 401 });
            }
        }

        return new Response("Not Found", { status: 404 });
    }
};

// Helper para verificar contraseñas
async function verifyPassword(plainPassword, hashedPassword) {
    // Usa bcrypt.js o una librería similar para verificar contraseñas
    const bcrypt = await import("bcryptjs");
    return bcrypt.compare(plainPassword, hashedPassword);
}
