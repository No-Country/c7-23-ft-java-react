import { MENULISTOFADMIN } from "../../../shared/constants";
import MenuMobile from "../../MenuMobile";
import MenuBody from "../Menu";

export default function Layout({ children }) {
  const menuList = MENULISTOFADMIN;
  const user = "Admin";
  return (
    <div className="h-full w-full md:flex">
      <div className="hidden md:block h-auto min-h-screen w-64 bg-base-100 relative shadow-2xl">
        <MenuBody menuList={menuList} user={user} />
      </div>
      <MenuMobile menuList={menuList} user={user} />
      <div className="bg-gray-100  w-full min-h-screen h-full px-5 pt-8 pb-20 md:p-10 ">
        {children}
      </div>
    </div>
  );
}
