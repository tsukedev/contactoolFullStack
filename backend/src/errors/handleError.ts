import AppError from "./appError";
import { Request, Response, NextFunction } from "express";

const handleAppError = (err: Error, req: Request, res: Response, next: NextFunction) => {

	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			message: err.message,
		});
	}

	return res.status(500).json({
		message: err.message,
	});
};

export default handleAppError;
