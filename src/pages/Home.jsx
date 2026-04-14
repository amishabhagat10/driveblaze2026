export default function Home() {
  return (
    <section style={sectionStyle}>
      <h1>DriveBlaze 2026</h1>
      <p>The future of speed and innovation</p>
    </section>
  );
}

const sectionStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};