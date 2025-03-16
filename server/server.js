import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes/auth-router.js"; // Import the router from auth-router.js
import { db } from "./db.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";
import { contactForm } from "./controller/contact-controller.js";

const app = express();
const port = process.env.PORT || 3000;

// CORS options with correct spelling and deployed frontend URL
const corsOption = {
  origin: ["http://localhost:5173", "https://xyz-infotech-frontend.onrender.com"], // Ensure correct production frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
  credentials: true, // Correct key
};

app.use(cors(corsOption));
app.use(express.json());
app.use("/api", router);
app.use("/form", contactForm);
app.use(errorMiddleware);

// Connect DB and start server
db().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
});
