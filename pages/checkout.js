import { useState } from 'react';

export default function Checkout() {
  const [amount, setAmount] = useState(10000);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handlePayment() {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, name, email }),
    });

    const data = await response.json();
    console.log('Payment Response:', data);

    window.snap.pay(data.token);
  }

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <label>Jumlah Pembayaran:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label>Nama:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handlePayment}>Bayar Sekarang</button>
    </div>
  );
}
