export default function Home() {
  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Rightron</h1>
      <p>Your AI assistant to check refunds.</p>
      <a href="/ticket-drop"
        style={{ padding: '12px 18px', background: '#0A4DFF',
                 borderRadius: '8px', display:'inline-block',
                 marginTop:'20px', color:'white'}}>
        🎟 Ticket Price Drop Checker
      </a>
    </div>
  );
}