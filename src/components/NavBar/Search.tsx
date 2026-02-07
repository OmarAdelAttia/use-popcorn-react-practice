import { useState } from 'react';

export function Search({ placeText }: { placeText: string }) {
  const [query, setQuery] = useState<string>('');

  return (
    <input
      className="search"
      type="text"
      placeholder={placeText}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
