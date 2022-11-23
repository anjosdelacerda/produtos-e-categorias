import database from "../database";

const updateCategorieService = async (id, name) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = ($1) WHERE id = ($2) RETURNING *",
      [name, id]
    );

    if (res.rows.length === 0) {
      throw new Error("id não conrresponde a nenhuma categoria");
    }

    const succesRes = {
      message: "Category updated",
      category: res.rows[0],
    };

    return succesRes;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default updateCategorieService;
