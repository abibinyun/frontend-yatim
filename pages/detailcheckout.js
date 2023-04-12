import { useState } from 'react';
import { snap } from 'midtrans-client';

const PaymentForm = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // initialize Midtrans Snap client
    const snapClient = snap({
      isProduction: false,
      serverKey: 'SB-Mid-server-E-9Lf_l6OPv3Cpi5xWg2nqUi',
      clientKey: 'SB-Mid-client-EnAeGgvemQDCGJfB',
    });

    // prepare payment data
    const paymentData = {
      transaction_details: {
        order_id: 'YOUR_ORDER_ID',
        gross_amount: 10000,
      },
      customer_details: {
        first_name: fullName.split(' ')[0],
        last_name: fullName.split(' ')[1] || '',
        email,
        phone: phoneNumber,
        billing_address: {
          first_name: fullName.split(' ')[0],
          last_name: fullName.split(' ')[1] || '',
          address,
          phone: phoneNumber,
          city: 'Jakarta',
          postal_code: '12345',
          country_code: 'IDN',
        },
        shipping_address: {
          first_name: fullName.split(' ')[0],
          last_name: fullName.split(' ')[1] || '',
          address,
          phone: phoneNumber,
          city: 'Jakarta',
          postal_code: '12345',
          country_code: 'IDN',
        },
      },
    };

    // create Snap Token
    const { token } = await snapClient.createTransactionToken(paymentData);

    // redirect to payment page
    window.location.href = `https://app.sandbox.midtrans.com/snap/v2/vtweb/${token}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
