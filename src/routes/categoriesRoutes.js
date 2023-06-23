import express from "express";
import categoriesController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/api/categories", categoriesController.listarcategories);
// .get("/categories/:id", categoriesController.listarCategoriaPorId)
// .post("/categories", categoriesController.cadastrarCategoria)
// .put("/categories/:id", categoriesController.atualizarCategoria)
// .delete("/categories/:id", categoriesController.excluirCategoria)

export default router;