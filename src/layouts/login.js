import React from "react";

const LoginLayout = ({ children }) => (
  <div className="flex max-w-6xl h-screen mx-auto items-center">
    <div className="mx-auto w-96">
      <h1 className="font-semibold text-2xl text-center mb-12">
        Welcome to My Goals!
      </h1>
      {children}
    </div>
  </div>
);

export default LoginLayout;
