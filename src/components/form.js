import React from "react";

const Form = ({ children, submitHandler, ...rest }) => (
  <form className="flex flex-col p-4" onSubmit={submitHandler} {...rest}>
    {children}
  </form>
);

export default Form;
