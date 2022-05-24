import React from "react";

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
    <form
      className="flex justify-center content-center flex-col"
      onSubmit={handleSubmit}
    >
      {message && <p className="text-red-500 mb-2">{message}</p>}
      <label className="flex flex-col mb-6">
        First Name
        <input
          className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
          type="text"
          name="firstName"
          id="firstName"
          ref={firstNameRef}
        />
      </label>
      <label className="flex flex-col mb-6">
        Last Name
        <input
          className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
          type="text"
          name="lastName"
          id="lastName"
          ref={lastNameRef}
        />
      </label>
      <label className="flex flex-col mb-6">
        Email
        <input
          className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
          type="email"
          name="email"
          id="email"
          ref={emailRef}
        />
      </label>
      <label className="flex flex-col mb-6">
        Password
        <input
          className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        />
      </label>
      <label className="flex flex-col mb-6">
        Confirm Password
        <input
          className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          ref={confirmPasswordRef}
        />
      </label>
      <button
        className="flex justify-center content-center w-fit text-white bg-slate-400 hover:bg-slate-500 py-1.5 px-4 m-auto rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateUserForm;
