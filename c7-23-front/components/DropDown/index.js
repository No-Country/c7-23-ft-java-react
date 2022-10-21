export default function DropDown({ dropDownItems = [], onSelect }) {
  return (
    <div className="z-10 dropdown dropdown-left cursor-pointer">
      <div
        tabIndex={0}
        className="h-5 w-6 m-1 flex justify-around items-center"
      >
        <span className="h-1 w-1 rounded-full bg-black" />
        <span className="h-1 w-1 rounded-full bg-black" />
        <span className="h-1 w-1 rounded-full bg-black" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {dropDownItems.map((item) => {
          return (
            <li key={item.id}>
              <a value={item.value} onClick={() => onSelect(item)}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
