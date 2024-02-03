import cors from 'cors';
import express from 'express';
import { registerRoutes } from './core';
import { CORS_METHODS, CORS_ORIGIN, APP_PORT, APP_URL_BASE } from './core/constants';

const app = express();
app.use(cors({
  origin: CORS_ORIGIN,
  methods: CORS_METHODS
}));

registerRoutes(app);

app.listen(APP_PORT, () =>
  console.log(`Application running on the port: ${APP_PORT} - ${APP_URL_BASE}`)
);
