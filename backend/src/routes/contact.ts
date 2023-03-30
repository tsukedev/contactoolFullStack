import { Router } from "express";
import verifyYupMiddleware from "../middlewares/verifyYup";
import verifyTokenMiddleware from "../middlewares/verifyToken";
import verifyIdMiddleware from "../middlewares/verifyContactId";
import { contactSchema, contactUpdateSchema } from "../schemas/contact";
import { createContactController, deleteContactController, listContactController, listOneContactIdController, modifyContactController } from "../controllers/contacts";

const contactsRoute = Router();

contactsRoute.get("/contacts/", verifyTokenMiddleware, listContactController);
contactsRoute.get("/contacts/:id", verifyTokenMiddleware, listOneContactIdController);
contactsRoute.delete("/contacts/:id", verifyTokenMiddleware, deleteContactController);
contactsRoute.post("/contacts/", verifyTokenMiddleware, verifyYupMiddleware(contactSchema), createContactController);
contactsRoute.patch("/contacts/:id", verifyTokenMiddleware, verifyIdMiddleware, verifyYupMiddleware(contactUpdateSchema), modifyContactController);

export default contactsRoute;
