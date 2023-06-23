import express from "express";
import categoriesController from "../controllers/CategoriesController.js";

const router = express.Router();

router
  .get("/categories", categoriesController.listarCategorias)
// .get("/categories/:id", categoriesController.listarCategoriaPorId);
// .post("/categories", categoriesController.cadastrarCategoria)
// .put("/categories/:id", categoriesController.atualizarCategoria)
// .delete("/categories/:id", categoriesController.excluirCategoria)

export default router;