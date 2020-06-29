import { startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';

import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import Order from '../models/Order';

class DeliveriesController {
  async index(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(400).json({ error: 'You are not a Deliveryman!' });
    }

    if (deliveryman.id !== req.userID) {
      return res
        .status(400)
        .json({ error: 'You are not authorizate to see this info!' });
    }

    const orders = await Order.findAll({
      where: { deliveryman_id: req.userID },
      attributes: [
        'id',
        'product',
        'cancelad_at',
        'start_date',
        'end_date',
        'created_at',
      ],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'city',
            'street',
            'number',
            'complement',
            'cep',
          ],
        },
      ],
      order: [['id', 'ASC']],
    });

    const endOrders = orders.filter((o) => o.end_date !== null);

    return res.json({
      orders: endOrders,
    });
  }

  async update(req, res) {
    const order = await Order.findOne({
      where: { id: req.params.order, deliveryman_id: req.userID },
    });

    if (!order) {
      return res
        .status(400)
        .json({ error: 'You dont have no Order with this ID' });
    }

    const date = new Date();

    const orders = await Order.findAll({
      where: {
        deliveryman_id: req.userID,
        start_date: {
          [Op.between]: [startOfDay(date), endOfDay(date)],
        },
      },
    });

    if (orders.length === 5) {
      return res
        .status(400)
        .json({ error: 'You cannot pick up more deliveries' });
    }

    await order.update({
      start_date: date,
    });

    return res.json({ ok: true });
  }
}

export default new DeliveriesController();
