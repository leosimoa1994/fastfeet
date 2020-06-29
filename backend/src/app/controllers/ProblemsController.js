import * as Yup from 'yup';
import Problem from '../models/Problem';
import Order from '../models/Order';

class ProblemController {
  async index(req, res) {
    const orderExist = await Order.findByPk(req.params.id);

    if (!orderExist) {
      return res.status(401).json({ error: 'This Order does not exist' });
    }

    const problemsOrder = await Problem.findAll({
      where: { delivery_id: req.params.id },
    });

    return res.json(problemsOrder);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const orderExist = await Order.findByPk(req.params.id);

    if (!orderExist) {
      return res.status(401).json({ error: 'This Order does not exist' });
    }

    const data = {
      delivery_id: req.params.id,
      description: req.body.description,
    };

    const problem = await Problem.create(data);

    return res.json(problem);
  }
}

export default new ProblemController();
