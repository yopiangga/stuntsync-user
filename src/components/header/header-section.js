export function HeaderSection({ label }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="h-6 w-1 bg-blue-main"></div>
      <div>
        <h4 className="f-h4 line-clamp-1">{label}</h4>
      </div>
    </div>
  );
}
