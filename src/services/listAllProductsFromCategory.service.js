import database from "../database";

const listAllProductsFromCategoryService = async (category_id) => {
  try {
    const list = await database.query(
      "SELECT p.name, p.price, c.name AS category FROM products AS p INNER JOIN categories AS c ON c.id = p.category_id WHERE category_id = ($1)",
      [category_id]
    );

    return list.rows;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default listAllProductsFromCategoryService;
