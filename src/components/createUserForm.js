import React from "react";

import Form from "./form";
import Label from "./label";
import Input from "./input";
import Button from "./button";

const CreateUserForm = ({
  handleSubmit,
  firstNameRef,
  lastNameRef,
  emailRef,
  passwordRef,
  confirmPasswordRef,
  message,
}) => {
  return (
    <Form submitHandler={handleSubmit}>
      {message && <p className="text-red-500 mb-2">{message}</p>}
      <Label>
        First Name
        <input
          className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
          type="text"
          name="firstName"
          id="firstName"
          ref={firstNameRef}
        />
      </Label>
      <Label>
        Last Name
        <input
          className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
          type="text"
          name="lastName"
          id="lastName"
          ref={lastNameRef}
        />
      </Label>
      <Label>
        Email
        <input
          className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
          type="email"
          name="email"
          id="email"
          ref={emailRef}
        />
      </Label>
      <Label>
        Password
        <input
          className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        />
      </Label>
      <Label>
        Confirm Password
        <input
          className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          ref={confirmPasswordRef}
        />
      </Label>
      <Button type="submit" className="m-auto">
        Create Account
      </Button>
    </Form>
  );
};

export default CreateUserForm;
