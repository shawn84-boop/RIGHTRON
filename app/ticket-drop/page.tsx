'use client';
import { useState } from 'react';

export default function TicketDrop() {
  const [pricePaid, setPricePaid] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [result, setResult] = useState('');

  async function handleCheck() {
    const r = await fetch('/api/ticket', {
      method: 'POST',
      body: JSON.stringify({ pricePaid, currentPrice })
    });
    const data = await r.json();
    setResult(data.result);
  }

  return (
    <div style={{ padding:'40px' }}>
      <h1 style={{ fontSize:'28px', fontWeight:'bold' }}>Ticket Price Drop</h1>
      <div style={{ marginTop:'20px' }}>
        <label>You paid: </label>
        <input value={pricePaid} onChange={e=>setPricePaid(e.target.value)} />
      </div>
      <div style={{ marginTop:'20px' }}>
        <label>Current price: </label>
        <input value={currentPrice} onChange={e=>setCurrentPrice(e.target.value)} />
      </div>
      <button onClick={handleCheck}
        style={{ marginTop:'20px', padding:'10px 16px', background:'#0A4DFF',
                 borderRadius:'8px', color:'white', cursor:'pointer' }}>
        Check
      </button>
      {result && (
        <div style={{marginTop:'30px', padding:'20px',
          background:'rgba(255,255,255,0.1)', borderRadius:'8px'}}>
          <strong>Result: </strong>{result}
        </div>
      )}
    </div>
  );
}