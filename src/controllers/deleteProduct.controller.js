import deleteProductService from "../services/deleteProduct.service";

const deleteProductController = async (request, response) => {
  const { id } = request.params;

  try {
    const res = await deleteProductService(id);

    return response.status(204).json(res);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export default deleteProductController;
