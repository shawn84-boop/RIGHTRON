export default function Home() {
  return (
    <div style={{
      padding: "40px",
      fontFamily: "sans-serif",
      color: "white"
    }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Rightron
      </h1>

      <p style={{ marginTop: "12px", opacity: 0.8 }}>
        Your AI assistant for ticket refunds, price drops and event rights.
      </p>

      <a
        href="/ticket-drop"
        style={{
          display: "inline-block",
          marginTop: "24px",
          padding: "12px 20px",
          background: "#0A4DFF",
          borderRadius: "8px",
          color: "white",
          textDecoration: "none"
        }}
      >
        🎟 Check Ticket Price Drop
      </a>
    </div>
  );
}
