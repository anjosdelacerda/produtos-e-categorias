import database from "../database";

const updateProductService = async (id, name, price, category_id) => {
  try {
    const verificacao = await database.query(
      "SELECT * FROM products WHERE id = ($1)",
      [id]
    );

    if (verificacao.rows.legnth === 0) {
      throw new Error("produto não encontrado");
    }

    const [product] = verificacao.rows;

    name ? (product.name = name) : product.name;
    price ? (product.price = price) : product.price;
    category_id ? (product.category_id = category_id) : product.category_id;

    const res = await database.query(
      "UPDATE products SET name = ($1), price = ($2), category_id = ($3) WHERE id = ($4) RETURNING *",
      [product.name, product.price, product.category_id, id]
    );

    const succesRes = {
      message: "Product updated",
      product: res.rows[0],
    };

    return succesRes;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default updateProductService;
