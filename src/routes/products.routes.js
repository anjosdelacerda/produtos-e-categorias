import { Router } from "express";

const router = Router();

import createProductController from "../controllers/createProduct.controller";
import listProductsController from "../controllers/listProducts.controller";
import listUniqueProductController from "../controllers/listUniqueProduct.controller";
import updateProductController from "../controllers/updateProduct.controller";
import deleteProductController from "../controllers/deleteProduct.controller";
import listAllProductsFromCategoryController from "../controllers/listAllProductsFromCategory.controller";

router.post("/products", createProductController);
router.get("/products", listProductsController);
router.get("/products/:id", listUniqueProductController);
router.patch("/products/:id", updateProductController);
router.delete("/products/:id", deleteProductController);
router.get(
  "/products/category/:category_id",
  listAllProductsFromCategoryController
);

export default router;
