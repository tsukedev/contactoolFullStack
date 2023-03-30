import { Router } from "express";
import verifyYupMiddleware from "../middlewares/verifyYup";
import { userSchema, userUpdateSchema } from "../schemas/user";
import verifyTokenMiddleware from "../middlewares/verifyToken";
import { createUserController, deleteUserController, listUserController, updateUserController } from "../controllers/users";

const userRoute = Router();

userRoute.get("/users/own", verifyTokenMiddleware, listUserController);
userRoute.delete("/users/own", verifyTokenMiddleware, deleteUserController);
userRoute.post("/users", verifyYupMiddleware(userSchema), createUserController);
userRoute.patch("/users/own", verifyTokenMiddleware, verifyYupMiddleware(userUpdateSchema), updateUserController);

export default userRoute;
