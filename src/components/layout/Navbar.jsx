import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Founder's Letter", path: "/founders-letter" },
    { name: "Ceo Letter", path: "/ceo-letter" },
    { name: "What We Do", path: "/what-we-do" },
    { name: "Impact", path: "/news" },
    { name: "News & Articles", path: "/investors" },
    { name: "Carrers", path: "/investors" }
  ];

  return (
    <div className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          <ul className="flex items-center gap-8">
            {menus.map((menu) => (
              <li key={menu.path}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `text-sm font-medium uppercase tracking-wide transition duration-300 ${
                      isActive
                        ? "text-[#018A5E]"
                        : "text-white hover:text-[#018A5E]"
                    }`
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink
            to="/contact"
            className="bg-[#018A5E] text-white text-sm font-semibold px-6 py-2 rounded-full hover:opacity-90 transition duration-300"
          >
            CONTACT US
          </NavLink>

        </div>
      </div>
    </div>
  );
};

export default Navbar;