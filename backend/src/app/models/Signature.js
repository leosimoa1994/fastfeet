import Sequelize, { Model } from 'sequelize';

class Signature extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/sign/${this.path}`;
          },
        },
      },
      {
        sequelize: connection,
      }
    );
    return this;
  }
}

export default Signature;
