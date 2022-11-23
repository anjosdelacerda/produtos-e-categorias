import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import categoriesRouter from "./routes/categories.routes.js";
import productsRouter from "./routes/products.routes.js";
const app = express();

app.use(express.json());

app.use("", categoriesRouter);
app.use("", productsRouter);

app.get("/", (request, response) => {
  response.send("hello, express");
});

export default app.listen(3333, () => {
  console.log("Server running");
  startDatabase();
});
