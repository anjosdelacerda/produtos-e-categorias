import listCategoriesService from "../services/listCategories.service";

const listCategoriesController = async (request, response) => {
  try {
    const list = await listCategoriesService();

    return response.json(list);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default listCategoriesController;
