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
      <div className="h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="bg-transparent flex absolute w-screen h-screen z-10 md:w-auto md:bg-white md:relative md:shadow-2xl">
          <div className="m-auto text-center p-3 m-auto">
            <h1 className="font-semibold text-6xl mb-4 text-slate-800">
              My Goals
            </h1>
            <p className="text-xl max-w-md mb-4 text-slate-800">
              Welcome to the perfect place to set your goals and track your
              progress. The best goals are the ones we continously work towards
              to acheive.
            </p>
            <div className="flex justify-center gap-3">
              <Button element={Link} to="/login" state={{ newUser: true }}>
                Get Started
              </Button>
              <Button
                element={Link}
                appearance="subtle"
                to="/login"
                state={{ newUser: false }}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
        <StaticImage
          className="h-screen opacity-50 md:opacity-80"
          src="../images/cool-background.png"
          alt="abstract vector art"
        />
      </div>
    );
  }
};

export default IndexPage;
