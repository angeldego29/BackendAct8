import { env } from '../config/env.js';
export const getHealth = (_req, res) => {
    res.status(200).json({
        data: {
            status: 'up',
            version: env.APP_VERSION,
            environment: env.NODE_ENV
        }
    });
};
export const getDatabaseHealth = (_req, res) => {
    res.status(503).json({ data: { status: 'down' } });
};
