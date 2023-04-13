export default async function handler(req, res) {
  const { order_id, amount, params, message } = req.body;
  const { relawan, donatur, email } = params;
  const userName = !donatur ? '' : donatur;
  const userContact = !email ? '' : email;
  const nameRelawan = !relawan ? '' : relawan;

  const url = 'https://app.sandbox.midtrans.com/snap/v1/transactions';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Basic U0ItTWlkLXNlcnZlci1xcTExRDhUd0JTc05XbzRadG92bHRpM3g6',
    },
    body: JSON.stringify({
      transaction_details: { order_id: order_id, gross_amount: parseInt(amount) },
      credit_card: { secure: true },
      customer_details: {
        first_name: userName,
        last_name: nameRelawan,
        email: userContact,
        phone: '085817154959',
      },
      custom_field1: message,
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
