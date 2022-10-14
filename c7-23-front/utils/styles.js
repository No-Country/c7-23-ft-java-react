export function classNames(...classes) {
  return classes
    .filter((item) => Boolean(item) && typeof item === "string")
    .join(" ");
}
