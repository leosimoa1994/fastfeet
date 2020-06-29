import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const deliverymans = await Deliveryman.findAll({
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
      order: [['id', 'ASC']],
    });

    return res.json(deliverymans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const deliverymanExist = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    if (deliverymanExist) {
      return res
        .status(401)
        .json({ error: 'This deliveryman already exists!!' });
    }

    const deliveryman = await Deliveryman.create(req.body);

    return res.json({ deliveryman });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const deliverymanExist = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res
        .status(401)
        .json({ error: 'Does not exist a deliveryman with this ID!' });
    }

    if (deliverymanExist && deliverymanExist.email !== deliveryman.email) {
      return res
        .status(401)
        .json({ error: 'This deliveryman already exists!!' });
    }

    const { name, email } = await deliveryman.update(req.body);

    return res.json({
      name,
      email,
    });
  }

  async delete(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res
        .status(400)
        .json({ error: 'You cannot remove the deliveryman with this ID' });
    }

    await Deliveryman.destroy({ where: { id: req.params.id } });

    return res.json({
      ok: true,
    });
  }
}

export default new DeliverymanController();
