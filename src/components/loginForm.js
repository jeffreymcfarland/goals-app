import React from "react";

const LoginForm = ({ handleSubmit, emailRef, passwordRef, message }) => {
  return (
    <form
      className="flex justify-center content-center flex-col"
      onSubmit={handleSubmit}
    >
      {message && <p className="text-red-500 mb-2">{message}</p>}
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
          type="text"
          name="password"
          id="password"
          ref={passwordRef}
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

export default LoginForm;
