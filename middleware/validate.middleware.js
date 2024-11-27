
import { validationResult } from 'express-validator';

export const validate = (request, response, next) => {
    
    const errors = validationResult(request);
    
    if (!errors.isEmpty()) {
        return response.status(400).json({
           message: "Validation failed.",
           errors: errors.array()
        });
    }

    next();
    
};