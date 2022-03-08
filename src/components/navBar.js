import React from "react";

import NavItem from "./navLink";

const NavBar = ({ signOutUser }) => {
  const [navItems, setNavItems] = React.useState(["Home", "Goals", "Settings"]);

  return (
    <nav className="flex flex-row h-16 items-center">
      <div className="mx-12 text-2xl font-bold">My Goals</div>
      <ul className="flex flex-row">
        {navItems.map((navItem) => (
          <NavItem key={navItem} href={navItem.toLowerCase()}>
            {navItem}
          </NavItem>
        ))}
      </ul>
      <button onClick={signOutUser} className="ml-auto mr-12">
        Sign Out
      </button>
    </nav>
  );
};

export default NavBar;
