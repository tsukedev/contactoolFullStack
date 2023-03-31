import cors from "cors";
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoute from "./routes/user";
import loginRoute from "./routes/login";
import contactsRoute from "./routes/contact";
import handleAppError from "./errors/handleError"; 

const app = express();

app.use(express.json());
app.use(cors());

app.use("", loginRoute);
app.use("", userRoute);
app.use("", contactsRoute);

app.use(handleAppError);

export default app;
