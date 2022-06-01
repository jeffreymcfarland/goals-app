import React from "react";
import { isLoggedIn } from "../services/auth";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../components/button";

const IndexPage = () => {
  if (isLoggedIn()) {
    navigate("/dashboard");
    return null;
  } else {
    return (
      <div className="h-screen grid grid-cols-2">
        <div className="flex shadow-2xl z-10">
          <div className="m-auto text-center px-3">
            <h1 className="font-semibold text-6xl mb-4 text-slate-800">
              My Goals
            </h1>
            <p className="text-xl max-w-md mb-4">
              Welcome to the perfect place to set your goals and track your
              progress. The best goals are the ones we continously work towards
              to acheive.
            </p>
            <div className="flex justify-center gap-3">
              <Button element={Link} to="/login" state={{ newUser: true }}>
                Get Started
              </Button>
              <Button
                appearance="subtle"
                element={Link}
                to="/login"
                state={{ newUser: false }}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
        <StaticImage
          className="object-cover"
          src="../images/cool-background.png"
          alt=""
        />
      </div>
    );
  }
};

export default IndexPage;
