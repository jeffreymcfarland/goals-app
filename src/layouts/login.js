import React from "react";

const LoginLayout = ({ children }) => (
  <div className="flex max-w-6xl h-screen mx-auto items-center">
    <div className="mx-auto w-96">{children}</div>
  </div>
);

export default LoginLayout;
