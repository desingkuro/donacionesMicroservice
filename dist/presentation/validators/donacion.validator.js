import { body } from "express-validator";
export const donacionesCreateValidator = [
    body('idDonacion').notEmpty().withMessage('El idDonacion es obligatorio'),
    body('idTipoDonacion').notEmpty().withMessage('El idTipoDonacion es obligatorio'),
    body('idDonador').notEmpty().withMessage('El idDonador es obligatorio'),
    body('idCampania').notEmpty().withMessage('El idCampania es obligatorio'),
    body('fechaCreacion').notEmpty().withMessage('La fechaCreacion es obligatoria'),
    body('state').notEmpty().withMessage('El state es obligatorio'),
    body('checker').notEmpty().withMessage('El checker es obligatorio'),
];
//# sourceMappingURL=donacion.validator.js.map