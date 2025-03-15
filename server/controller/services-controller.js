import { Service } from "../models/service-model.js";

export const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json({ response });
  } catch (error) {
    console.log(`server error: ${error}`);
  }
};
