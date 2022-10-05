export default function Services() {
  return (
    <div className="w-full bg-neutral pt-10">
      <p className="text-4xl font-semibold text-white p-10">Services</p>
      <div className="carousel justify-center carousel-center w-full space-x-4  rounded-box md:overflow-x-hidden md:flex-wrap md:flex gap-2">
        <div className="carousel-item w-60">
          <div className="card  bg-base-100 shadow-2xl rounded-3xl">
            <div class="card-body items-center text-center">
              <h2 class="card-title">Doctors</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
        <div className="carousel-item w-60">
          <div className="card w-96 bg-base-100 shadow-2xl rounded-3xl">
            <div class="card-body items-center text-center">
              <h2 class="card-title">Clinics</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
        <div className="carousel-item w-60">
          <div className="card w-96 bg-base-100 shadow-2xl rounded-3xl">
            <div class="card-body items-center text-center">
              <h2 class="card-title">Labs</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
        <div className="carousel-item w-60">
          <div className="card w-96 bg-base-100 shadow-2xl rounded-3xl">
            <div class="card-body items-center text-center">
              <h2 class="card-title">Emergency</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
