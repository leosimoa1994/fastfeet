import Sequelize from 'sequelize';

import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import File from '../app/models/File';
import Deliveryman from '../app/models/Deliveryman';
import Signature from '../app/models/Signature';
import Order from '../app/models/Order';
import Problem from '../app/models/Problem';

import databaseConfig from '../config/database';

const models = [User, Recipient, File, Deliveryman, Signature, Order, Problem];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
