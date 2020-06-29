import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';
import Order from '../models/Order';
import Recipient from '../models/Recipient';
import File from '../models/File';
import authConfig from '../../config/auth';

class DeliverymanSessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validate fails' });
    }

    const deliveryman = await Deliveryman.findOne({
      where: { id: req.body.id },
      include: {
        model: File,
        as: 'avatar',
        attributes: ['id', 'path', 'url'],
      },
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists!!' });
    }

    return res.json({
      deliveryman,
      token: jwt.sign({ id: deliveryman.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

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
      where: { deliveryman_id: deliveryman.id },
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

    const orderOpen = orders.filter(
      (o) => o.end_date === null && o.cancelad_at === null
    );

    return res.json({
      orders: orderOpen,
    });
  }
}

export default new DeliverymanSessionController();
