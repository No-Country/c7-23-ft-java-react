import Image from "next/image";
import Link from "next/link";
import { useLogOut } from "../../../queries/authQueries";

import ArrowLeftIcon from "../../../public/assets/icons/arrowLeftIcon.svg";

export default function MenuBody({ menuList, user }) {
  const logout = useLogOut();

  return (
    <div className="w-full ">
      <div className="h-12 flex justify-center items-center">
        <p className="font-medium text-xl">My turn</p>
      </div>
      <div className="h-36 avatar placeholder flex flex-col justify-center items-center w-full">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
          <span className="text-3xl ">A</span>
        </div>
        <p className="font-bold mt-2 text-gray-600">{user}</p>
      </div>
      <ul className="menu w-full rounded-box text-gray-600">
        {menuList.map(({ url, name }) => {
          return (
            <li key={url} className="hover-bordered">
              <Link href={url}>
                <a> {name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="cursor-pointer absolute bottom-4 font-semibold text-gray-600 flex justify-center items-center w-full md:w-auto md:fixed md:left-2 z-20">
        <Image alt="back icon" layout="fixed" src={ArrowLeftIcon} />
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
}
