import { Router } from "express";
import { userLoginSchema } from "../schemas/user";
import loginUserController from "../controllers/login";
import verifyYupMiddleware from "../middlewares/verifyYup";

const loginRoute = Router();

loginRoute.post("/login", verifyYupMiddleware(userLoginSchema), loginUserController);

export default loginRoute;
