import { body } from "express-validator";

export const todoValidatorRules = () => {
    return [
        body('title')
            .notEmpty()
            .withMessage('Title is required')
            .isLength({ min: 3, max: 50 })
            .withMessage('Title must be between 3 and 50 characters'),
        body('description')
             .notEmpty()
             .withMessage('Description is required'),
        body('status').isIn([
            'DONE', 
            'IN_PROGRESS', 
            'TODO'
        ])
    ]
};