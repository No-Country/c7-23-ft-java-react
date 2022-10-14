import { useController } from "react-hook-form";
import { classNames as cls } from "../../utils/styles";

export default function Input({
  name,
  control,
  label,
  placeholder,
  type = "text",
  right = null,
  ...rest
}) {
  const { field, fieldState } = useController({ name, control });

  const isError = fieldState.error && fieldState.isTouched;

  return (
    <label>
      {label}
      <div className="w-full relative">
        <input
          {...field}
          type={type}
          placeholder={placeholder}
          className={cls("form-input", !isError && "mb-3")}
          {...rest}
        />
        {right}
      </div>
      {isError && (
        <div className="mb-3">
          <span className="text-red-600">{fieldState.error?.message}</span>
        </div>
      )}
    </label>
  );
}
