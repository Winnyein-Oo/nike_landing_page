import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="container flex justify-between items-center text-lg font-montserrat padding-x py-8 ">
        <a>
          <img src="./src/assets/images/header-logo.svg" />
        </a>
        <ul className="flex gap-16 items-center text-slate-gray max-lg:hidden ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="font-medium max-lg:hidden">
          <a href="#">Sign in</a>
          <span> / </span>
          <a href="#">Explore now</a>
        </div>
        <div className="lg:hidden">
          <img src="/src/assets/icons/hamburger.svg" width={24} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
