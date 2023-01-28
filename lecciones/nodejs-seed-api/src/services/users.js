import userModel from "../models/users.js";

export const getitemsServices = async () => {
  try {
    const listAll = await userModel.find({});

    return listAll;
  } catch (error) {
    console.log(error);
  }
};

export const createItemsServices = async (name, age, email) => {
  try {
    const resDetail = await userModel.create({
      name,
      age,
      email,
    });

    return resDetail;
  } catch (error) {
    console.log(error);
  }
};
