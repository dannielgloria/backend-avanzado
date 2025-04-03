import { celebrate, Joi, Segments } from "celebrate";

export const userValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().max(50),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6)
    })
})