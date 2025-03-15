import "dotenv/config";

import express from "express";
import cors from "cors";
import { router } from "./routes/auth-router.js"; // Import the router from auth-router.js
import { db } from "./db.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";
import { contactForm } from "./controller/contact-controller.js";

const app = express();
//!middlewre thaat pares incoming requests in json payload
const corsOption={
  origin:"http://localhost:5173",
  methods:"GET, POST, PUT, DELETE, PATCH,HEAD",
  credential:true
}
app.use(cors(corsOption))
app.use(express.json());
app.use("/api", router);
app.use("/form",contactForm)
app.use(errorMiddleware);

db().then(() => {
  app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
  });
});
