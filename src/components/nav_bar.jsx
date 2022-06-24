import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const navLinks = [
  {
    path: '/',
    id: 1,
    text: 'Rockets',
  },

  { path: '/missions', id: 2, text: 'Missions' },

  { path: '/profile', id: 3, text: 'Profile' },
];

function Navbar() {
  return (
    <header
      className="d-flex queries-header"
      style={{
        height: '15%',
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #7A7A7A',
        position: 'sticky',
        top: '0',
        zIndex: '999999',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div
        className="logo d-flex"
        style={{
          padding: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}
      >
        <img
          src={logo}
          style={{ width: '60px', height: '60px' }}
          alt="logo"
        />
        <h1 className="title">Space Travelers&apos; Hub</h1>
      </div>
      <ul className="d-flex links">
        {navLinks.map((link) => (
          <NavLink key={link.id} to={link.path} style={{ textDecoration: 'none', fontWeight: 'bold', color: '#135DCD' }}>
            {' '}
            {link.text}
          </NavLink>
        ))}
      </ul>
    </header>
  );
}
export default Navbar;
