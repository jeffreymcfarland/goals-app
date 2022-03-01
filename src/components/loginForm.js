import * as React from "react";

const LoginForm = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  return (
    <form className="flex justify-center content-center flex-col">
      <label className="flex flex-col mb-6">
        Email
        <input
          className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label className="flex flex-col mb-6">
        Password
        <input
          className="border-solid border-2 border-slate-200 rounded-md text-xl leading-10"
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
