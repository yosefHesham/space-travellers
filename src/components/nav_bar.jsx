import { NavLink } from 'react-router-dom';
import planet from '../assets/images/planet1.png';

const navLinks = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  { path: '/missions', id: 2, text: 'Missions' },
  { path: '/profile', id: 3, text: 'Profile' },
];

export default function Navbar() {
  const handleClick = () => {
    const nav = document.querySelector('.mobile-menu');
    nav.classList.toggle('hidden');
  };

  const closeMenu = () => {
    const nav = document.querySelector('.mobile-menu');
    nav.classList.add('hidden');
  };

  return (
    <header className="header flex w-full justify-between items-center p-3 md:py-4 md:px-24 bg-black fixed top-0 z-10">
      <div className="md:flex md:items-center md:gap-8">
        <img src={planet} alt="logo" className="w-6 h-6 md:h-14 md:w-14" />
        <h1 className="hidden md:inline md:text-3xl text-white">Space Travelers&apos; Hub</h1>
      </div>
      <ul className="hidden absolute w-full md:w-auto top-12 md:top-0 left-0 h-44 md:h-auto bg-black md:relative mobile-menu md:flex md:gap-24 text-white font-light md:font-normal">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="nav-links md:border-b border-transparent hover:text-grayLight md:hover:border-white text-center mt-4 md:mt-0"
          >
            <NavLink
              to={link.path}
              className={({ isActive }) => isActive ?? 'border-white'}
              onClick={closeMenu}
            >
              {' '}
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <button onClick={handleClick} type="button" className="md:hidden">
        <svg
          className=" w-6 h-6 text-white md:hidden"
          fill="#FFFFFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
