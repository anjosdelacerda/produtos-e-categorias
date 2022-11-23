import database from "../database";

const deleteCategorieService = async (id) => {
  try {
    const res = await database.query(
      "DELETE FROM categories WHERE id = ($1) RETURNING *",
      [id]
    );

    if (res.rows.length === 0) {
      throw new Error("id não conrresponde a nenhuma categoria");
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

export default deleteCategorieService;
