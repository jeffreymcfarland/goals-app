import React from "react";

const NavItem = ({ href, children }) => {
  return (
    <li className="ml-12">
      <a href={href}>{children}</a>
    </li>
  );
};

export default NavItem;
