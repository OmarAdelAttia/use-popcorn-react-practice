export function NumResults({ movieNum }: { movieNum?: number }) {
  return (
    <p className="num-results">
      Found <strong>{movieNum}</strong> results
    </p>
  );
}
