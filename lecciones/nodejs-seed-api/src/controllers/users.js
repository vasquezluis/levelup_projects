import { httpErrors } from "../helpers/handleErrors.js";
import { createItemsServices, getitemsServices } from "../services/users.js";

export const getItems = async (req, res) => {
  try {
    const result = await getitemsServices();

    res.json(result);
  } catch (error) {
    httpErrors(res, error);
  }
};

export const getItem = (req, res) => {};

export const createItems = async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const result = await createItemsServices(name, age, email);

    res.json(result);
  } catch (error) {
    httpErrors(res, error);
  }
};

export const updateItems = (req, res) => {};

export const deleteItems = (req, res) => {};
