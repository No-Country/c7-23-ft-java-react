import { useController } from "react-hook-form";

export default function Toggle({ label, name, control }) {
  const { field, fieldState } = useController({ name, control });

  const isError = fieldState.error && fieldState.isTouched;

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span>
        <input
          type="checkbox"
          className="toggle"
          {...field}
          checked={field.value}
        />
      </label>
      {isError && (
        <div className="mb-3">
          <span className="text-error">{fieldState.error?.message}</span>
        </div>
      )}
    </div>
  );
}
