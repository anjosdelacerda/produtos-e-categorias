import listAllProductsFromCategoryService from "../services/listAllProductsFromCategory.service";

const listAllProductsFromCategoryController = async (request, response) => {
  const { category_id } = request.params;
  try {
    const list = await listAllProductsFromCategoryService(category_id);

    return response.json(list);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default listAllProductsFromCategoryController;
