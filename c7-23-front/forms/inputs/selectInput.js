import { useController } from "react-hook-form";
import { classNames as cls } from "../../utils/styles";

export default function SelectInput({
  name,
  control,
  label,
  right = null,
  options = [],
  className,
  ...rest
}) {
  const { field, fieldState } = useController({ name, control });

  const isError = fieldState.error && fieldState.isTouched;

  return (
    <div className={className}>
      <label className="w-full">
        {label}
        <div className="w-full relative">
          <select
            {...field}
            name={name}
            className={cls("form-select w-full rounded-xl", !isError && "mb-3")}
            {...rest}
          >
            <option value={name} disabled>
              {name}
            </option>
            {options.map(({ value }) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
            {right}
          </select>
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
