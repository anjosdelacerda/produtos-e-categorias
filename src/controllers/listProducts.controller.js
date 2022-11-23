import listProductsService from "../services/listProducts.serivce";

const listProductsController = async (request, response) => {
  try {
    const list = await listProductsService();

    return response.json(list);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default listProductsController;
