import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const recipients = await Recipient.findAll({
      attributes: [
        'id',
        'name',
        'city',
        'street',
        'number',
        'complement',
        'state',
        'cep',
      ],
      order: [['id', 'ASC']],
    });

    return res.json(recipients);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number().required(),
      complement: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().max(8).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const user = await Recipient.create(req.body);

    return res.json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      cep: Yup.string().max(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const recipient = await Recipient.findOne(
      { where: { id: req.params.id } },
      {
        attributes: [
          'name',
          'street',
          'number',
          'complement',
          'state',
          'city',
          'cep',
        ],
      }
    );

    if (!recipient) {
      return res
        .status(400)
        .json({ error: 'This id recipient does not exist!' });
    }

    const {
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    } = await recipient.update(req.body);

    return res.json({
      name,
      street,
      number,
      complement,
      state,
      city,
      cep,
    });
  }

  async delete(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res
        .status(400)
        .json({ error: 'You cannot remove the recipient with this ID' });
    }

    await Recipient.destroy({ where: { id: req.params.id } });

    return res.json({
      ok: true,
    });
  }
}

export default new RecipientController();
