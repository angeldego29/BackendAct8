import { checkDatabaseHealth } from '../services/database.service.js';
export const getHealth = (_req, res) => {
    res.status(200).json({ status: 'ok' });
};
export const getDatabaseHealth = async (_req, res) => {
    const database = await checkDatabaseHealth();
    res.status(200).json({ data: { database } });
};
