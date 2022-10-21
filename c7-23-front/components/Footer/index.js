export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title">Company</span>
        <a href="#about" className="link link-hover">
          About us
        </a>
        <a href="#contact" className="link link-hover">
          Contact
        </a>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="#services" className="link link-hover">
          Medical consultation
        </a>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved</p>
        <p>
          <a href="https://www.freepik.es/vector-gratis/paciente-dibujado-mano-plana-tomando-examen-medico_12810348.htm#page=2&query=doctor&position=1&from_view=search&track=sph">
            Imagen de pikisuperstar
          </a>
          en Freepik
        </p>
      </div>
    </footer>
  );
}
