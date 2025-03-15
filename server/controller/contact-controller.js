import { Contact } from "../models/contact-model.js";

export const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    res.status(201).json({ message: "Message sent successfully !!" });
  } catch (error) {
    
    res.status(500).json({ message: "Message not Send !!" });
  }
};
