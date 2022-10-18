import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import Lines from "../public/assets/images/lines.png";
import Doctor from "../public/assets/images/doctor.png";
import StethoscopeIcon from "../public/assets/icons/stethoscopeIcon.svg";
import HeartIcon from "../public/assets/icons/heartIcon.svg";
import BackIcon from "../public/assets/icons/back.svg";

export default function AuthContainer({ pageTitle = "", children, onSubmit }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>My turn app | {pageTitle}</title>
      </Head>

      <div className="absolute h-12 w-11 top-6 cursor-pointer">
        <button onClick={() => router.back()}>
          <Image alt="back icon" layout="fill" src={BackIcon} />
        </button>
      </div>
      <div className="w-full h-screen grid md:grid-cols-2 items-center justify-items-center">
        <div className="w-full max-w-[300px]">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Welcome to My turn
          </h1>
          <form className="font-medium" onSubmit={onSubmit}>
            {children}
          </form>
        </div>
        <div className="w-full h-full md:flex hidden relative  bg-[#181A2A] justify-center items-center">
          <Image
            className="-ml-4"
            alt="line"
            layout="fill"
            src={Lines}
            priority
          />
          <div className="md:w-80 md:h-[390px] lg:h-[420px] lg:w-96 bg-[#8690E3]/50  rounded-3xl z-10 flex items-end justify-end relative backdrop-blur-sm">
            <div className="text-white font-bold text-2xl w-11/12 flex flex-col self-start mt-11">
              <p className="mb-11">At my turn we work for your health</p>
              <p>Sign in now</p>
            </div>
            <div className="md:h-11 md:w-11 lg:h-16 lg:w-16 absolute md:-left-5 lg:-left-8 bottom-20">
              <Image
                className="h-full w-full"
                alt="heart icon"
                layout="fill"
                src={HeartIcon}
              />
            </div>
            <div className="md:h-11 md:w-11 lg:h-16 lg:w-16 absolute top-40  md:-right-5  lg:-right-8">
              <Image
                className="h-full w-full"
                alt="heart icon"
                layout="fill"
                src={StethoscopeIcon}
              />
            </div>
            <div className="absolute bottom-0 -right-7 h-80 w-64">
              <Image
                className="h-full w-full"
                alt="image of doctor"
                layout="fill"
                src={Doctor}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
