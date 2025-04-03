import { celebrate, Joi, Segments } from "celebrate";

export const postValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required().min(10),
        userId: Joi.string().required(),
    })
})