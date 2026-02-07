export function Logo({ logo, title }: { logo: string; title: string }) {
  return (
    <div className="logo">
      <span role="img">{logo}</span>
      <h1>{title}</h1>
    </div>
  );
}
