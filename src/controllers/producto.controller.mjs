import express from "express";
import ProductoService from "../services/producto.service.mjs";

const router = express.Router();

function obtenerRegistros(req, res, next) {
    ProductoService.obtenerRegistros()
        .then((registros) => res.json(registros))
        .catch((err) => next(err));
}

function crearRegistros(req, res, next) {
    const { nombre } = req.body;

    ProductoService.crearRegistro(nombre)
        .then(() => {
            res.status(201).json({ mensaje: "Producto registrado correctamente." });
        })
        .catch((err) => next(err));
}

function editarRegistros(req, res, next) {
    const { id, nombre } = req.body;

    ProductoService.editarRegistro(id, nombre)
        .then(() => {
            res.status(200).json({ mensaje: "Producto editado correctamente." });
        })
        .catch((err) => next(err));
}

function eliminarRegistros(req, res, next) {
    const { id } = req.params;

    ProductoService.eliminarRegistro(id)
        .then(() => {
            res.status(200).json({ mensaje: "Producto eliminado correctamente." });
        })
        .catch((err) => next(err));
}

router.get("/", obtenerRegistros);
router.post("/", crearRegistros);
router.put("/", editarRegistros);
router.delete("/:id", eliminarRegistros);

export default router;