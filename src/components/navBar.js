import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { getUser, isLoggedIn, logout } from "../services/auth";
import { getAuth, signOut } from "firebase/auth";

import NavItem from "./navLink";
import useFirebase from "./useFirebase";

const NavBar = () => {
  const firebase = useFirebase();
  const [navItems] = useState(["Dashboard", "Goals", "Settings"]);

  const signOutUser = () => {
    if (firebase) {
      const auth = getAuth();

      signOut(auth)
        .then(() => {
          console.log("Successfully signed out");
          logout(() => navigate("/"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    isLoggedIn() && (
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
    )
  );
};

export default NavBar;
