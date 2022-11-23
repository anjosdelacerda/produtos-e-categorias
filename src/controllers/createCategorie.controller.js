import createCategorieService from "../services/createCategorie.service";

const createCategorieController = async (request, response) => {
  const { name } = request.body;

  try {
    const categoria = await createCategorieService(name);

    return response.status(201).json(categoria);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default createCategorieController;
