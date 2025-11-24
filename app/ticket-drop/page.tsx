'use client';

import { useState } from 'react';

export default function TicketDropPage() {
  const [pricePaid, setPricePaid] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [result, setResult] = useState('');

  async function handleCheck() {
    const res = await fetch('/api/ticket', {
      method: 'POST',
      body: JSON.stringify({ pricePaid, currentPrice })
    });
    const data = await res.json();
    setResult(data.result);
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', color: 'white' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Ticket Price Drop</h1>
      <p style={{ marginTop: '10px', opacity: 0.8 }}>Check if you overpaid.</p>

      <div style={{ marginTop: '30px' }}>
        <div>
          <label>You paid ($): </label>
          <input value={pricePaid}
            onChange={(e) => setPricePaid(e.target.value)}
            style={{ padding: '8px', marginLeft: '10px', borderRadius: '6px' }} />
        </div>

        <div style={{ marginTop: '20px' }}>
          <label>Current lower price ($): </label>
          <input value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
            style={{ padding: '8px', marginLeft: '10px', borderRadius: '6px' }} />
        </div>

        <button onClick={handleCheck}
          style={{
            marginTop: '20px',
            padding: '10px 16px',
            background: '#0A4DFF',
            borderRadius: '8px',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
          Check
        </button>
      </div>

      {result && (
        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '10px'
        }}>
          <strong>Result:</strong>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}