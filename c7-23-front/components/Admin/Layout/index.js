import Menu from "../Menu";
import { MENULISTOFADMIN } from "../../../shared/constants";

export default function Layout({ children }) {
  const menuList = MENULISTOFADMIN;
  const user = "Admin";
  return (
    <div className="h-full w-full flex">
      <Menu menuList={menuList} user={user} />
      <div className="bg-gray-100  w-full h-auto p-10">{children}</div>
    </div>
  );
}
