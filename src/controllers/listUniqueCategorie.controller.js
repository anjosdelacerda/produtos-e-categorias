import listUniqueCategorieService from "../services/listUniqueCategorie.service";

const listUniqueCategorieController = async (request, response) => {
  const { id } = request.params;
  try {
    const categoria = await listUniqueCategorieService(id);

    return response.json(categoria);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default listUniqueCategorieController;
