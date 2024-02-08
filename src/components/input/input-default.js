export function InputDefault({
  label,
  name,
  value,
  handleChange,
  type = "text",
  required = false,
  placeholder = "",
  color = "dark",
  min,
  max,
}) {
  return (
    <div className="flex flex-col">
      <label
        className={`f-p1-r ${
          color == "dark" ? "text-black" : "text-blue-main"
        }`}
        htmlFor="email"
      >
        {label}
      </label>
      <input
        className={`f-p1-r w-full border rounded-lg px-3 py-3 outline-none mt-2 ${
          color == "dark" ? "border-black" : "border-blue-main"
        }`}
        name={name}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
