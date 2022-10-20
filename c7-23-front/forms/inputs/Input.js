import { useController } from "react-hook-form";
import { classNames as cls } from "../../utils/styles";

export default function Input({
  name,
  control,
  label,
  placeholder,
  type = "text",
  right = null,
  className,
  ...rest
}) {
  const { field, fieldState } = useController({ name, control });

  const isError = fieldState.error && fieldState.isTouched;

  return (
    <div className={className}>
      <label>
        {label}
        <div className="w-full relative flex">
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={cls("form-input ", !isError && "mb-3")}
            {...rest}
          />
          {right}
        </div>
        {isError && (
          <div className="mb-3">
            <span className="text-error">{fieldState.error?.message}</span>
          </div>
        )}
      </label>
    </div>
  );
}
