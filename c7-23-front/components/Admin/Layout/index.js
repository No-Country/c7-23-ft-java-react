import Head from "next/head";
import Image from "next/image";

import { MENULISTOFADMIN } from "../../../shared/constants";

import MenuMobile from "../../MenuMobile";
import MenuBody from "../Menu";
import SearchInput from "../../SeachInput";

import AddIcon from "../../../public/assets/icons/addIcon.svg";

export default function Layout({
  children,
  pageTitle = "Admin",
  sections = [],
}) {
  const menuList = MENULISTOFADMIN;
  const user = "Admin";
  const pageName = "My turn";
  return (
    <div className="h-auto min-h-screen md:flex">
      <Head>
        <title>
          {pageName} | {pageTitle}
        </title>
      </Head>
      <div className="hidden md:block h-auto min-h-screen w-1/5 bg-base-100 relative shadow-2xl">
        <MenuBody menuList={menuList} user={user} />
      </div>
      <MenuMobile menuList={menuList} user={user} />
      <div className="bg-gray-100  w-full  md:w-4/5 min-h-screen h-full px-5 pt-8   ">
        <div className="flex justify-center md:justify-between">
          <p className="font-medium text-center text-2xl">{pageTitle}</p>
        </div>
        <div className="tabs justify-center md:justify-start">
          {sections.map((sections) => {
            return (
              <button
                key={sections}
                className="tab tab-bordered focus:text-neutral"
              >
                {sections}
              </button>
            );
          })}
        </div>
        {children}
      </div>
    </div>
  );
}
