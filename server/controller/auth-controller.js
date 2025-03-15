import { userModel } from "../models/User-Model.js";

export const home = (req, res) => {
  try {
    res.status(200).send("Hello from the auth router!");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).send({ message: "User already exists" });
    }

    const userCreated = await userModel.create({
      username,
      email,
      phone,
      password,
    });
    res.status(201).send({
      msg: " user created successfully ",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await userModel.findOne({ email });
    if (!userExist) {
      return res.status(400).send({ message: "Invalid email or password" });
    }
    const user = await userExist.comparePassword(password);
    if (user) {
      res.status(200).send({
        msg: " user Login successfully ",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).send({ message: "Invalid password " });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const user = async (req, res) => {
  try {
    const user = req.user;
    res.send({ user });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
