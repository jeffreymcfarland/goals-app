import React, { useState } from "react";
import { navigate } from "gatsby";
import { isLoggedIn, logout } from "../services/auth";
import { getAuth, signOut } from "firebase/auth";
import useFirebase from "./useFirebase";

import NavLink from "./navLink";
import Button from "./button";
import { MenuBtn, CloseBtn } from "./icons";

const NavBar = () => {
  const firebase = useFirebase();
  const [navItems] = useState([
    { name: "Dashboard", link: "/dashboard" },
    { name: "Goals", link: "/dashboard/goals" },
    { name: "Settings", link: "/dashboard/settings" },
  ]);
  const [mobileNavItemsVisible, setMobileNavItemsVisible] = useState(false);

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

  const IconElement = mobileNavItemsVisible ? CloseBtn : MenuBtn;

  return (
    isLoggedIn() && (
      <>
        <nav className="flex flex-row h-16 items-center">
          <div className="mx-12 text-2xl font-bold text-slate-800">
            My Goals
          </div>
          <ul className="flex flex-row hidden sm:flex">
            {navItems.map((navItem, index) => (
              <li className={index !== 0 ? "ml-12" : undefined} key={index}>
                <NavLink
                  activeClassName="underline underline-offset-4 decoration-2"
                  className="hover:underline hover:underline-offset-4 hover:decoration-2"
                  href={navItem.link}
                >
                  {navItem.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button
            onClick={signOutUser}
            appearance="subtle"
            className="ml-auto mr-8 hidden sm:block"
          >
            Sign Out
          </Button>
          <IconElement
            className="w-7 sm:hidden ml-auto mr-8"
            onClick={() => setMobileNavItemsVisible(!mobileNavItemsVisible)}
          />
        </nav>
        {mobileNavItemsVisible && (
          <ul className="flex flex-col w-full h-full absolute z-10 bg-slate-200/25 sm:hidden">
            {navItems.map((navItem, index) => (
              <NavLink
                activeClassName={"font-bold"}
                href={navItem.link}
                onClick={() => setMobileNavItemsVisible(!mobileNavItemsVisible)}
              >
                <li
                  className="p-4 border-b-2 border-slate-300 bg-white"
                  key={index}
                >
                  {navItem.name}
                </li>
              </NavLink>
            ))}
            <li className="py-4 bg-white flex justify-end">
              <Button
                onClick={signOutUser}
                appearance="subtle"
                className="mr-8 sm:hidden"
              >
                Sign Out
              </Button>
            </li>
          </ul>
        )}
      </>
    )
  );
};

export default NavBar;
