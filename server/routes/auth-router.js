import { Router } from 'express';
import { home, login, register,user } from '../controller/auth-controller.js';
import { validate } from '../middlewares/validate-middleware.js';
import { signupSchema } from '../validators/auth-validator.js';
import { authMiddleware } from '../middlewares/auth-middleware.js';
import { services } from '../controller/services-controller.js';
import {  DeleteContactbyId, DeleteUserbyId, getallContacts, getallUser, getSingleUserbyId, updateUserbyId } from '../controller/admin-controller.js';
import { adminMiddleware } from '../middlewares/admin-middleware.js';

export const router = Router();

//!! Define your route
router.get('/', home);
router.post("/register",validate(signupSchema), register);
router.post("/login", login);
router.get("/user",authMiddleware,user)
router.get("/service",services)

//!user
router.get("/admin/users",authMiddleware,adminMiddleware,getallUser)
router.get("/admin/users/:id",authMiddleware,adminMiddleware,getSingleUserbyId)
router.delete("/admin/users/delete/:id",authMiddleware,adminMiddleware,DeleteUserbyId)
router.patch("/admin/users/update/:id",authMiddleware,adminMiddleware,updateUserbyId)


//!contacts
router.get("/admin/contacts",authMiddleware,adminMiddleware,getallContacts)
router.delete("/admin/contacts/delete/:id",authMiddleware,adminMiddleware,DeleteContactbyId)
