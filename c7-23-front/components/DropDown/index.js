export default function DropDown({ options = [] }) {
  return (
    <div className="dropdown dropdown-left cursor-pointer">
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
        {options.map((optName) => {
          return (
            <li key={optName}>
              <a>{optName}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
