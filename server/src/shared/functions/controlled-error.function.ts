import express from 'express';
import { AxiosError } from 'axios';

export const controlledError = (error: Error, res: express.Response): void => {
  if (error instanceof AxiosError) {
    res
      .status(error.response?.status || 500)
      .json({ name: error.name, message: error.message, data: error.response?.data });

    return;
  }

  res.status(500).json({ name: error.name, message: error.message });
};
