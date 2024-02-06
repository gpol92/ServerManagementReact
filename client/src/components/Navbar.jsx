import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/config">Config</Link>
          </li>
          <li>
            <Link to="/check">Check</Link>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;