import { NextApiRequest, NextApiResponse } from 'next';
import createTransactionToken from '../../lib/createTransactionToken';

export default async function handleCheckout(req,res){
  if (req.method === 'POST') {
    const { amount, name, email } = req.body;

    const transactionDetails = {
      order_id: 'ORDER-' + Date.now(),
      gross_amount: amount,
      email,
      customer_details: {
        first_name: name,
      },
    };

    try {
      const { token } = await createTransactionToken(transactionDetails);
      return res.status(200).json({ token });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
 
  return res.status(405).json({ message: 'Method not allowed' });
 
}