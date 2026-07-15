export function HighlightCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-gold)",
        borderRadius: 10,
        padding: "16px 18px",
        minWidth: 160,
      }}
    >
      <p
        style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-2)",
          marginBottom: 6,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: "var(--gold)",
          lineHeight: 1.15,
          margin: 0,
        }}
      >
        {value}
      </p>
    </div>
  );
}
