export default function SearchInput() {
  return (
    <div className="flex w-full  h-20 items-center">
      <div
        className="flex w-full md:w-60
       h-12 relative"
      >
        <input
          type="text"
          className="form-input shadow-md h-full border-none"
        />
        <button className="rounded-r-xl h-full absolute right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
