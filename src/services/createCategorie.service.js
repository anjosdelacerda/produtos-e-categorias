import database from "../database";

const createCategorieService = async (name) => {
  try {
    let res = await database.query(
      "INSERT INTO categories(name) VALUES ($1) RETURNING *",
      [name]
    );

    const succesRes = {
      message: "Created category",
      category: res.rows[0],
    };

    return succesRes;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default createCategorieService;
