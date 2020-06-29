import express from 'express';
import path from 'path';
import cors from 'cors';

import Routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(
      '/sign',
      express.static(path.resolve(__dirname, '..', 'tmp', 'signatures'))
    );
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(Routes);
  }
}

export default new App();
