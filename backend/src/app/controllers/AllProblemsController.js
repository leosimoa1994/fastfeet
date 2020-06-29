import Problem from '../models/Problem';
import Order from '../models/Order';

class AllProblemsController {
  async index(req, res) {
    const problems = await Problem.findAll({
      attributes: ['id', 'delivery_id', 'description'],
      order: [['id', 'ASC']],
    });

    res.json(problems);
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

export default new AllProblemsController();
