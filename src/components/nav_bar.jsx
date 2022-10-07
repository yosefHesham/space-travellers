import { NavLink } from 'react-router-dom';
import planet from '../images/planet1.png';

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
    <header className="flex w-full justify-between items-center p-3 md:py-4 md:px-24 bg-black fixed top-0 z-10">
      <div className="md:flex md:items-center md:gap-8">
        <img src={planet} alt="logo" className="w-6 h-6 md:h-14 md:w-14" />
        <h1 className="hidden md:inline md:text-3xl text-white">Space Travelers&apos; Hub</h1>
      </div>
      <ul className="flex gap-4 md:gap-24 text-white font-light md:font-normal">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="border-b border-transparent hover:border-white"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) => isActive && 'border-white'}
            >
              {' '}
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
export default Navbar;
