import { Router } from "express";

import createCategorieController from "../controllers/createCategorie.controller";
import listCategoriesController from "../controllers/listCategories.controller";
import listUniqueCategorieController from "../controllers/listUniqueCategorie.controller";
import updateCategorieController from "../controllers/updateCategorie.controller";
import deleteCategorieController from "../controllers/deleteCategorie.controller";

const router = Router();

router.post("/categories", createCategorieController);
router.get("/categories", listCategoriesController);
router.get("/categories/:id", listUniqueCategorieController);
router.patch("/categories/:id", updateCategorieController);
router.delete("/categories/:id", deleteCategorieController);

export default router;
