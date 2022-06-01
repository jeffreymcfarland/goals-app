import React from "react";

const Label = ({ children, ...rest }) => (
  <label className="flex flex-col mb-6" {...rest}>
    {children}
  </label>
);

export default Label;
