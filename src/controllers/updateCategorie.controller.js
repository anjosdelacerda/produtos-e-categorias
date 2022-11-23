import updateCategorieService from "../services/updateCategorie.service";

const updateCategorieController = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  try {
    const updateCategorie = await updateCategorieService(id, name);

    return response.status(200).json(updateCategorie);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default updateCategorieController;
