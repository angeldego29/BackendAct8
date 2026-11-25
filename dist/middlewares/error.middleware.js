import { AppError } from '../errors/app-error.js';
export const errorHandler = (err, _req, res, _next) => {
    const requestId = res.getHeader('X-Request-Id') ?? 'unknown';
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            error: {
                code: err.code,
                message: err.message,
                details: err.details,
                requestId
            }
        });
        return;
    }
    res.status(500).json({
        error: {
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Ocurrió un error inesperado.',
            requestId
        }
    });
};
