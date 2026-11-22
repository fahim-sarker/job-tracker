import { Router } from 'express';
import { prisma } from '../lib/prisma.js';

export const healthRouter = Router();

healthRouter.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

healthRouter.get('/db', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', database: 'up' });
  } catch (error) {
    console.error('Database health check failed:', error);
    res.status(503).json({ status: 'error', database: 'down' });
  }
});
