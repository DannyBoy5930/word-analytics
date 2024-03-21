export default function Stats() {
  return (
    <section className="stats">
      <Stat />
      <Stat />
      <Stat />
      <Stat />
    </section>
  );
}

function Stat() {
  return (
    <section className="stat">
      <span className="stat__number">0</span>
      <h2 className="second-heading">Words</h2>
    </section>
  );
}
