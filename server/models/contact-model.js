import mongoose from "mongoose";

export const contactSchema =new mongoose.Schema({
  username: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  message: {
    type: "string",
    required: true,
  },
});


export const Contact =  new mongoose.model("Contact",contactSchema)