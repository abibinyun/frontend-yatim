export default async function handler(req, res) {
  const { order_id, amount } = req.body;
  const url = 'https://app.sandbox.midtrans.com/snap/v1/transactions';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Basic U0ItTWlkLXNlcnZlci1FLTlMZl9sNk9QdjNDcGk1eFdnMm5xVWk6',
    },
    body: JSON.stringify({
      transaction_details: { order_id: order_id, gross_amount: parseInt(amount) },
      credit_card: { secure: true },
    }),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    res.status(200).json(json);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
}
