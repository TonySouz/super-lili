import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Header;