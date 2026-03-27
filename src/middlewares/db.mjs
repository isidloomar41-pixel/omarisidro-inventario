import mysql from "mysql2/promise";

async function connect() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Omar2005is",
        database: "inventario_papeleria",
        charset: "utf8mb4"
    });

    return connection;
}

export default connect;