import listUniqueProductService from "../services/listUniqueProduct.service";

const listUniqueProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const product = await listUniqueProductService(id);

    return response.json(product);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default listUniqueProductController;
