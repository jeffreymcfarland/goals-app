import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

const NavLink = ({ activeClassName, className, children, href, ...rest }) => {
  const navLinkClasses = classNames("text-slate-800", className);

  return (
    <Link
      to={href}
      className={navLinkClasses}
      activeClassName={activeClassName}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
