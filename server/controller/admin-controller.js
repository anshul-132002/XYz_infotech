import { Contact } from "../models/contact-model.js";
import { userModel } from "../models/User-Model.js";

export const getallUser = async (req, res, next) => {
  try {
    const users = await userModel.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const DeleteUserbyId = async (req, res, next) => {
  try {
    const id = req.params.id;
    await userModel.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const getSingleUserbyId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await userModel.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const updateUserbyId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;
    const data = await userModel.updateOne(
      { _id: id },
      { $set: updateUserData }
    );
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const getallContacts = async (req, res, next) => {
  try {
    const contact = await Contact.find();
    if (!contact || contact.length === 0) {
      return res.status(404).json({ message: "contact not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};


export const DeleteContactbyId = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    next(error);
  }
};