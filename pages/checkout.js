import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [id, setId] = useState(null);
  const [amount, setAmount] = useState(null);
  const router = useRouter();

  async function handleClick() {
    const response = await fetch('/api/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount,
        order_id: id,
      }),
    });
    const data = await response.json();
    router.push(data.redirect_url);

    console.log('data : ', data);
  }

  console.log(id, amount);
  return (
    <div>
      <h1>Welcome to My Store</h1>
      <p>Find your favorite products here</p>
      <input placeholder="order id" value={id} onChange={(e) => setId(e.target.value)} />
      <input placeholder="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleClick}>Checkout Now</button>
    </div>
  );
}
