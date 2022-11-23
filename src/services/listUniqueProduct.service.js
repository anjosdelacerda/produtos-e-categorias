import database from "../database";

const listUniqueProductService = async (id) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = ($1)", [
      id,
    ]);

    return res.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

export default listUniqueProductService;
