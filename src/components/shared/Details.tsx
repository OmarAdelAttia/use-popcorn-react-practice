export function Details({ icon, text }: { icon: string; text: string | number }) {
  return (
    <p>
      <span>{icon}</span>
      <span>{text}</span>
    </p>
  );
}
