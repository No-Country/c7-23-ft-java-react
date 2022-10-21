import Image from "next/image";
import Doctor from "../../public/assets/images/doctors.jpg";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 min-h-screen">
      <div className="hero-content flex-col">
        <div className="w-full max-w-md">
          <h1 className="text-5xl font-bold">Make an appointment</h1>
          <p className="py-6 font-medium text-lg">Welcome to our clinic site</p>
          <p className="w-full  max-w-sm text-zinc-700">
            My turn is an online clinic determined to offer you the best care
            and services. We have various specialties and a great team of
            professionals who work every day for your well-being.
          </p>
          <div className="my-5">
            <button className="btn btn-primary rounded-xl mr-5">
              <a href="#about">About us</a>
            </button>
            <button className="btn btn-primary rounded-xl">
              <a href="#contact">Contact</a>
            </button>
          </div>
          <div className="flex w-full h-12 relative">
            <input
              type="text"
              placeholder="Type doctor's name"
              className="form-input shadow-lg h-full"
            />
            <button className="btn btn-square rounded-r-xl h-full absolute right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden w-full h-full md:flex items-center ">
        <div className="md:h-1/3 lg:h-1/2 w-full relative">
          <Image alt="image of doctor" layout="fill" src={Doctor} priority />
        </div>
      </div>
    </div>
  );
}
