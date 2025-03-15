import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "At least 3 characters required")
    .max(255, "Maximum 255 characters allowed"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
    ),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address Format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
    ),
});

export const contactSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "At least 3 characters required")
    .max(255, "Maximum 255 characters allow"),
  email: Yup.string()
    .email("Invalid email address Format")
    .required("Email is required"),
  message: Yup.string()
    .min(1, "At least 1 character required")
    .max(255, "Maximum 255 characters are allowed")
    .required("Message is required"),
});
