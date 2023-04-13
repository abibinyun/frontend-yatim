export default async function handler(req, res) {
  const { order_id, amount, params, message } = req.body;
  const { relawan, donatur, email } = params;
  const userName = !donatur ? null : donatur;
  const userContact = !email ? null : email;
  const nameRelawan = !relawan ? null : relawan;

  const url = 'https://app.midtrans.com/snap/v1/transactions';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Basic TWlkLXNlcnZlci1JcFlKV1dSWDZnajFOMTNZV3VSeTRlZlM6',
    },
    body: JSON.stringify({
      transaction_details: { order_id: order_id, gross_amount: parseInt(amount) },
      credit_card: { secure: true },
      customer_details: {
        first_name: userName,
        last_name: nameRelawan,
        email: userContact,
        phone: '',
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
