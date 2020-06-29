import Sequelize, { Model } from 'sequelize';

class Problem extends Model {
  static init(connection) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      {
        sequelize: connection,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'delivery_id', as: 'order' });
  }
}

export default Problem;
