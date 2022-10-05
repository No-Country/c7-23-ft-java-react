import { useState, useRef, useCallback } from "react";

import Image from "next/image";
import Head from "next/head";

import Navbar from "../../components/Navbar";

import Lines from "../../public/assets/images/lines.png";
import Doctor from "../../public/assets/images/doctor.png";
import StethoscopeIcon from "../../public/assets/icons/stethoscopeIcon.svg";
import HeartIcon from "../../public/assets/icons/heartIcon.svg";
import eyeOpen from "../../public/assets/icons/eyeOpen.svg";
import eyeClosed from "../../public/assets/icons/eyeClosed.svg";

export default function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const refElement = useRef();

  const showPassword = useCallback(() => {
    const password = refElement.current;
    const showPassword = password.type === "password";
    if (showPassword) {
      password.type = "text";
    } else {
      password.type = "password";
    }
    setIsShowPassword(showPassword);
  }, []);

  const showEye = isShowPassword ? eyeOpen : eyeClosed;

  return (
    <>
      <Head>
        <title>My turn app | login</title>
        <meta name="description" content="My turn app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="w-full h-screen grid md:grid-cols-2 items-center justify-items-center">
        <div className="w-full max-w-[300px]">
          <h1 className="text-2xl font-semibold mb-4 text-center">
            Welcome to My turn
          </h1>
          <form className="font-medium">
            <label>
              Email
              <input
                type="email"
                placeholder="name@gmail.com"
                className="form-input"
                required
              />
            </label>
            <label>
              Password
              <div className="w-full relative">
                <input
                  type="password"
                  required
                  placeholder="*********"
                  className="form-input"
                  ref={refElement}
                />
                <div
                  className="w-[20%] h-5 absolute top-3 right-2 cursor-pointer"
                  onClick={showPassword}
                >
                  <Image alt="image of eye" src={showEye} layout="fill" />
                </div>
              </div>
            </label>
            <label>
              Role
              <select
                defaultValue="Role"
                required
                className="form-select rounded-xl w-full mb-4"
              >
                <option value="Role" disabled>
                  Role
                </option>
                <option value="Admin">Admin</option>
                <option value="Doctor">Doctor</option>
                <option value="Patient">Patient</option>
              </select>
            </label>

            <button type="summit" className="btn btn-primary rounded-xl w-full">
              Log in
            </button>
          </form>
          <p className="mt-3">
            Don´t have an account? <a className="link link-primary">Sing up</a>
          </p>
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
