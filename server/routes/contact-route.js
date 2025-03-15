import { contactForm } from "../controller/contact-controller";
import { router } from "./auth-router";
router.route("/contact").post(contactForm);
