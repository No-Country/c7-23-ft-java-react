import Image from "next/image";
import Clinic from "../../public/assets/icons/hospitalIcon.svg";
import Doctor from "../../public/assets/icons/doctorIcon.svg";
import Labs from "../../public/assets/icons/laboratoryIcon.svg";
import Ambulance from "../../public/assets/icons/ambulanceIcon.svg";

export default function Services() {
  return (
    <div className="w-full h-full bg-neutral pt-10">
      <a name="services"></a>
      <p className="text-4xl font-semibold text-white p-10">Services</p>
      <div className="carousel p-12 justify-start md:justify-center carousel-center w-full space-x-4  rounded-box md:overflow-x-hidden md:flex-wrap md:flex gap-2">
        <div className="carousel-item w-60">
          <div className="card justify-center items-center bg-base-100 shadow-2xl rounded-3xl">
            <figure className="h-14 w-14 mt-3 ">
              <Image alt="clinic icon" layout="fixed" src={Doctor} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Doctors</h2>
              <p>With the best doctors in one place</p>
            </div>
          </div>
        </div>
        <div className="carousel-item w-60">
          <div className="card justify-center items-center w-96 bg-base-100 shadow-2xl rounded-3xl">
            <figure className="h-14 w-14 mt-3">
              <Image alt="clinic icon" layout="fixed" src={Clinic} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Clinics</h2>
              <p>We have facilities to offer you the best care</p>
            </div>
          </div>
        </div>
        <div className="carousel-item w-60">
          <div className="card items-center w-96 bg-base-100 shadow-2xl rounded-3xl">
            <figure className="h-14 w-14 mt-3">
              <Image alt="clinic icon" layout="fixed" src={Labs} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Labs</h2>
              <p>Get your exams fast</p>
            </div>
          </div>
        </div>
        <div className="carousel-item w-60">
          <div className="card items-center w-96 bg-base-100 shadow-2xl rounded-3xl">
            <figure className="h-14 w-14 mt-3">
              <Image alt="clinic icon" layout="fixed" src={Ambulance} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Emergency</h2>
              <p>With attention 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
