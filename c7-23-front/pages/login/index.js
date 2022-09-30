import Image from "next/image";
import Doctor from "../../public/assets/olga-guryanova-tMFeatBSS4s-unsplash.jpg";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>My turn app | login</title>
        <meta name="description" content="My turn app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen grid md:grid-cols-2 items-center justify-items-center">
        <div className="w-auto max-w-[228px]">
          <h1 className="text-2xl font-semibold mb-5">Welcome to My turn</h1>
          <labe>
            Email
            <input
              type="email"
              placeholder="name@gmail.com"
              className="form-input"
            />
          </labe>
          <label>
            Password
            <input
              type="password"
              placeholder="*********"
              className="form-input"
            />
          </label>
          <label>
            Role
            <select class="form-select rounded-xl w-full mb-3">
              <option disabled selected>
                Role
              </option>
              <option>Admin</option>
              <option>Doctor</option>
              <option>Patient</option>
            </select>
          </label>

          <button class="btn btn-primary rounded-xl w-full">Log in</button>
          <p className="mt-3">
            Don´t have an account? <a className="link link-primary">Sing up</a>
          </p>
        </div>
        <div className="w-full h-full md:block hidden  relative">
          <Image
            className="object-cover absolute z-30"
            width="880px"
            height="868px"
            layout="fill"
            alt="Image of doctors"
            src={Doctor}
          />
          <div className="bg-black  h-full w-full absolute z-40 opacity-60"></div>
        </div>
      </div>
    </>
  );
}
