export default function About() {
  return (
    <div className="w-full h-full p-8">
      <a name="about"></a>
      <p className="text-4xl font-semibold p-10">About us</p>
      <div className="w-full flex  justify-center gap-5 flex-wrap">
        <div className="h-auto w-96 shadow-xl rounded-tr-3xl rounded-bl-3xl p-4 bg-primary text-white">
          <p className="font-bold text-xl">who we are</p>
          <p>
            We are a private institution that offers medical and surgical
            services of excellent quality, at competitive prices, with
            accessibility 24 hours a day, 365 days a year.
          </p>
        </div>
        <div className="w-96 h-auto shadow-xl rounded-tr-3xl rounded-bl-3xl p-4 bg-primary text-white">
          <p className="font-bold text-xl">Our vision</p>
          <p>
            Lead the Transformation of the current Health System to ensure its
            sustainability, promoting innovation and incorporating the new
            available technologies.
          </p>
        </div>
        <div className="w-96 h-auto shadow-xl rounded-tr-3xl rounded-bl-3xl p-4 bg-primary text-white">
          <p className="font-bold text-xl">Our mision</p>
          <p>
            Collaborate to improve the health and quality of life of citizens,
            offering excellent health services, with the patient at the center
            of our attention, and highly qualified professionals, in a private
            hospital with a teaching and research vocation.
          </p>
        </div>
      </div>
    </div>
  );
}
