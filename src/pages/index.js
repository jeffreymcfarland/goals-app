import React from "react";
import { isLoggedIn } from "../services/auth";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  if (isLoggedIn()) {
    navigate("/dashboard");
    return null;
  } else {
    return (
      <div className="h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="flex shadow-2xl z-10">
          <div className="m-auto text-center p-3">
            <h1 className="font-semibold text-6xl mb-4 text-slate-800">
              My Goals
            </h1>
            <p className="text-xl max-w-md mb-4 text-slate-800">
              Welcome to the perfect place to set your goals and track your
              progress. The best goals are the ones we continously work towards
              to acheive.
            </p>
            <div className="flex justify-center gap-3">
              <Link
                to="/login"
                state={{ newUser: true }}
                className="px-4 py-2 rounded-md text-white bg-slate-500 hover:bg-slate-600"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                state={{ newUser: false }}
                className="px-4 py-2 rounded-md text-slate-500 bg-white hover:bg-slate-100"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <StaticImage
          className="absolute md:relative opacity-50 md:opacity-80"
          src="../images/cool-background.png"
          alt="abstract vector art"
        />
      </div>
    );
  }
};

export default IndexPage;
