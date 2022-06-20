import { NavLink } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    id: 1,
    text: "Rockets",
  },

  { path: "/missions", id: 2, text: "Missions" },

  { path: "/profile", id: 3, text: "Profile" },
];

const Navbar = () => {
  return (
    <header
      className="d-flex"
      style={{ width: "100%", height: "15%", display: "flex" }}
    >
      <article  className="logo d-flex" style={{ display: "flex" }}>
        <img
          src={require("../images/planet.png")}
          style={{ width: "60px", height: "60px" }}
        />
        <h1>Space Travelers` Hub</h1>
      </article>
      <ul className="d-flex" >
        {navLinks.map((link) => (
          <NavLink key={link.id} to={link.path}>
            {" "}
            {link.text}
          </NavLink>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
