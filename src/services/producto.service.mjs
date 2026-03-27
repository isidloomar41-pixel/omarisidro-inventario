import connect from "../middlewares/db.mjs";

async function obtenerRegistros() {
    const db = await connect();
    try {
        const [rows] = await db.execute("SELECT * FROM producto");
        return rows;
    } catch (error) {
        return Promise.reject("Error al obtener datos");
    } finally {
        db.end();
    }
}

async function crearRegistro(nombre) {
    const db = await connect();
    try {
        await db.execute("INSERT INTO producto (nombre) VALUES (?)", [nombre]);
        return "OK";
    } catch (error) {
        return Promise.reject("Error al insertar");
    } finally {
        db.end();
    }
}

async function editarRegistro(id, nombre) {
    const db = await connect();
    try {
        await db.execute("UPDATE producto SET nombre = ? WHERE id = ?", [nombre, id]);
        return "OK";
    } catch (error) {
        return Promise.reject("Error al editar");
    } finally {
        db.end();
    }
}

async function eliminarRegistro(id) {
    const db = await connect();
    try {
        await db.execute("DELETE FROM producto WHERE id = ?", [id]);
        return "OK";
    } catch (error) {
        return Promise.reject("Error al eliminar");
    } finally {
        db.end();
    }
}

export default {
    obtenerRegistros,
    crearRegistro,
    editarRegistro,
    eliminarRegistro
};