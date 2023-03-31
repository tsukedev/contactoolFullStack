import { AnySchema } from "yup";
import { NextFunction, Request, Response } from "express";

// verificar se o padrão do schema tá certinho (na pasta schemas).

const verifyYupMiddleware =

	(schema: AnySchema) =>
		async (req: Request, res: Response, next: NextFunction) => {
			
			try {
				const validated = await schema.validate(req.body, {
					abortEarly: false,
					stripUnknown: true,
				});
				req.body = validated;
				return next();
			}
			catch (err) {
				return res.status(400).json({ error: err.errors });
			}
		};

export default verifyYupMiddleware;
