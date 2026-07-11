export default function Dropdown({ label, id, options = [], className = "", placeholder = "Select an option", ...props }) {
  return (
    <div className={className}>
      {label && <label htmlFor={id} className="label">{label}</label>}
      <select id={id} className="input-field cursor-pointer" {...props}>
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
