export default function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', color: 'white' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Rightron</h1>
      <p style={{ marginTop: '10px', opacity: 0.8 }}>
        Your AI assistant to check if you're owed a refund.
      </p>
      <div style={{ marginTop: '40px' }}>
        <a href="/ticket-drop"
          style={{
            padding: '16px 22px',
            background: '#0A4DFF',
            borderRadius: '8px',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
          🎟 Ticket Price Drop Checker
        </a>
      </div>
    </div>
  );
}