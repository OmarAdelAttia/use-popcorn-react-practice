export function ToggleButton({ isOpen, toggleOpen }: { isOpen: boolean; toggleOpen: () => void }) {
  return (
    <button className="btn-toggle" onClick={toggleOpen}>
      {isOpen ? '–' : '+'}
    </button>
  );
}
