import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar shadow-sm lg:px-8 fixed top-0 z-50 bg-white">
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
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
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center lg:navbar-start">
        <a className="normal-case text-xl">My turn</a>
      </div>
      <div className="hidden lg:flex  navbar-end ">
        <ul className="flex items-center gap-3 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li className="min-w-[74px]">
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <Link href="/login">
              <a className="btn btn-neutral rounded-xl">Login</a>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <a className="btn btn-primary rounded-xl">Register</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
