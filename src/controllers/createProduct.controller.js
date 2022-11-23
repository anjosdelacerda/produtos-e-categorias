import createProductService from "../services/createProduct.service";

const createProductController = async (request, response) => {
  const { name, price, category_id } = request.body;

  try {
    const produto = await createProductService(name, price, category_id);

    return response.status(201).json(produto);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default createProductController;
