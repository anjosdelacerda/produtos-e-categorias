import deleteCategorieService from "../services/deleteCategorie.service";

const deleteCategorieController = async (request, response) => {
  const { id } = request.params;

  try {
    const res = await deleteCategorieService(id);

    return response.status(204).json(res);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default deleteCategorieController;
