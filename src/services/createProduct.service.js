import database from "../database";

const createProductService = async (name, price, category_id) => {
  try {
    let res = await database.query(
      "INSERT INTO products(name, price, category_id) VALUES ($1, $2, $3) RETURNING *",
      [name, price, category_id]
    );

    const succesRes = {
      message: "Created product",
      product: res.rows[0],
    };

    return succesRes;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default createProductService;
