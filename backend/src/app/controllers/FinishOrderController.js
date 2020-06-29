import Order from '../models/Order';

class FinishOrderController {
  async update(req, res) {
    const order = await Order.findOne({
      where: { id: req.params.id_order, deliveryman_id: req.userID },
    });

    if (!order) {
      return res.status(400).json({ error: 'This order does not exist' });
    }

    try {
      await order.update({ end_date: new Date(), signature_id: req.body.sign });
      return res.json({ menssage: 'ok' });
    } catch (err) {
      return res.status(400).json({ error: 'Try again later' });
    }
  }
}

export default new FinishOrderController();
