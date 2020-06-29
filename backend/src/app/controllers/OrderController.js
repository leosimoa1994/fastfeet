import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import Order from '../models/Order';
import File from '../models/File';
import Signature from '../models/Signature';

class OrderController {
  async index(req, res) {
    const orders = await Order.findAll({
      attributes: ['id', 'product', 'cancelad_at', 'start_date', 'end_date'],
      include: [
        {
          model: Signature,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
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
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
      order: [['id', 'ASC']],
    });

    return res.json(orders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const recipient = await Recipient.findByPk(req.body.recipient_id);

    if (!recipient) {
      return res
        .status(400)
        .json({ error: 'Do not exist recipient with this ID' });
    }

    const deliveryman = await Deliveryman.findByPk(req.body.deliveryman_id);

    if (!deliveryman) {
      return res
        .status(400)
        .json({ error: 'Do not exist deliveryman with this ID' });
    }

    const order = await Order.create(req.body);

    return res.json(order);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const order = await Order.findByPk(req.params.id);

    if (!order) {
      return res
        .status(400)
        .json({ error: 'Does not exist no Order with this ID' });
    }

    const recipient = await Recipient.findByPk(req.body.recipient_id);

    if (!recipient) {
      return res
        .status(400)
        .json({ error: 'Do not exist recipient with this ID' });
    }

    const deliveryman = await Deliveryman.findByPk(req.body.deliveryman_id);

    if (!deliveryman) {
      return res
        .status(400)
        .json({ error: 'Do not exist deliveryman with this ID' });
    }

    const orderUpdate = await order.update(req.body);

    return res.json(orderUpdate);
  }

  async delete(req, res) {
    const order = await Order.findByPk(req.params.id);

    if (!order) {
      return res.status(400).json({ error: 'This order does not exist!!' });
    }

    await order.update({ cancelad_at: new Date() });

    return res.json({
      massage: `the Order with ID:${order.id} is deleted!`,
      order,
    });
  }
}

export default new OrderController();
