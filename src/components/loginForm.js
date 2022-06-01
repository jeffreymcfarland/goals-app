import React from "react";

import Form from "./form";
import Label from "./label";
import Button from "./button";
import Input from "./input";

const LoginForm = ({ handleSubmit, emailRef, passwordRef, message }) => {
  return (
    <Form submitHandler={handleSubmit}>
      {message && <p className="text-red-500 mb-2">{message}</p>}
      <Label>
        Email
        <Input type="email" ref={emailRef} />
      </Label>
      <Label>
        Password
        <Input type="password" ref={passwordRef} />
      </Label>
      <Button type="submit" className="m-auto">
        Sign In
      </Button>
    </Form>
  );
};

export default LoginForm;
