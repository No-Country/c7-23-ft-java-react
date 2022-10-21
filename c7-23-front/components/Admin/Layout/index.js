import { MENU_LIST_OF_ADMIN } from "../../../shared/constants";

import MenuMobile from "../../MenuMobile";
import MenuBody from "../Menu";

export default function Layout({
  children,
  pageTitle = "Admin",
  sections = [],
  onChangeSection,
}) {
  const user = "Admin";
  const pageName = "My turn";
  return (
    <div className="h-auto min-h-screen md:flex">
      <div className="hidden md:block h-auto min-h-screen w-1/5 bg-base-100 relative shadow-2xl">
        <MenuBody menuList={MENU_LIST_OF_ADMIN} user={user} />
      </div>
      <MenuMobile menuList={MENU_LIST_OF_ADMIN} user={user} />
      <div className="bg-gray-100  w-full  md:w-4/5 min-h-screen h-full px-5 pt-8   ">
        <div className="flex justify-center md:justify-between">
          <p className="font-medium text-center text-2xl">{pageTitle}</p>
        </div>
        <div className="tabs justify-center md:justify-start">
          {sections.map((section) => {
            return (
              <button
                key={section}
                className="tab tab-bordered focus:text-neutral"
                onClick={() => onChangeSection?.(section)}
              >
                {section}
              </button>
            );
          })}
        </div>
        {children}
      </div>
    </div>
  );
}
