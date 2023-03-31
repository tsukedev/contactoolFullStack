import "dotenv/config";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

const verifyTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	
	if (!req.headers) {
		return res.status(401).json({ message: "Token needed to have access" });
	}

	let token = req.headers.authorization;
	
	if (!token) {
		return res.status(401).json({ message: "You need the authorization Token" });
	}

	token = token.split(" ")[1];

	jwt.verify(token, process.env.SECRET_KEY as string, (err, decoded: any) => {
		if (err) {
			return res.status(401).json({ message: "You need the authorization Token" });
		}

		req.user = {
			id: decoded.sub,
			email: decoded.email,
		};

		return next();
	});
};

export default verifyTokenMiddleware;
