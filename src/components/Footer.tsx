import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="bg-warning text-dark py-3 fixed-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo à esquerda */}
        <Link className="navbar-brand" to="/">
          <img src="" alt="Super LILI" width="30" height="24" />
        </Link>

        {/* Redes sociais à direita */}
        <div className="d-flex gap-5">
          <a
            href="https://www.instagram.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
          </a>

          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark"
            aria-label="WhatsApp"
          >
            <i className="bi bi-whatsapp" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;