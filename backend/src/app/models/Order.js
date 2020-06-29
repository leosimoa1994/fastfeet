import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(connection) {
    super.init(
      {
        product: Sequelize.STRING,
        cancelad_at: Sequelize.DATE,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
      },
      {
        sequelize: connection,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Recipient, {
      foreignKey: 'recipient_id',
      as: 'recipient',
    });
    this.belongsTo(models.Deliveryman, {
      foreignKey: 'deliveryman_id',
      as: 'deliveryman',
    });
    this.belongsTo(models.Signature, {
      foreignKey: 'signature_id',
      as: 'signature',
    });
  }
}

export default Order;
