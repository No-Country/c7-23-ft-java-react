export default function Checkbox({ label, ...props }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span>
        <input type="checkbox" className="checkbox" {...props} />
      </label>
    </div>
  );
}
