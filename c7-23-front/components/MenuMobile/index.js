import MenuBody from "../Admin/Menu";

export default function MenuMobile({ menuList, user }) {
  return (
    <div className="md:hidden">
      <div className="">
        <label
          htmlFor="my-modal-3"
          className="m-2 btn btn-ghost bg-white btn-circle z-10 fixed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>

      <input type="checkbox" id="my-modal-3" className=" modal-toggle " />

      <div className="modal  bg-white">
        <div className="relative h-full w-full ">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <MenuBody menuList={menuList} user={user} />
        </div>
      </div>
    </div>
  );
}
