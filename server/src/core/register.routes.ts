import express from 'express';
import { itemController } from './controllers';

export const registerRoutes = (app: express.Application): void => {
  itemController(app);
};
