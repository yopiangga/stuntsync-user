export function HeaderSection({ label }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="h-6 w-1 bg-blue-main"></div>
      <div>
        <h5 className="f-h5 line-clamp-1">{label}</h5>
      </div>
    </div>
  );
}
