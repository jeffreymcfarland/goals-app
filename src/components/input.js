import React, { forwardRef } from "react";

const Input = forwardRef(({ type, ...rest }, ref) => (
  <input
    className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
    type={type}
    name={type}
    id={type}
    ref={ref}
    {...rest}
  />
));

export default Input;
