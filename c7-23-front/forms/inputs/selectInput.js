import { useController } from "react-hook-form";
import { classNames as cls } from "../../utils/styles";

export default function SelectInput({
  name,
  control,
  label,
  right = null,
  options = [],
  ...rest
}) {
  const { field, fieldState } = useController({ name, control });

  const isError = fieldState.error && fieldState.isTouched;

  return (
    <label>
      {label}
      <div className="w-full relative">
        <select
          {...field}
          defaultValue={name}
          name={name}
          className={cls("form-select rounded-xl w-full", !isError && "mb-3")}
          {...rest}
        >
          <option value={name} disabled>
            {name}
          </option>
          {options.map((items) => {
            return (
              <option key={items} value={items}>
                {items}
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
  );
}
