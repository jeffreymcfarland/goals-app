export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("goalsUser")
    ? JSON.parse(window.localStorage.getItem("goalsUser"))
    : {};

const setUser = (user) =>
  window.localStorage.setItem("goalsUser", JSON.stringify(user));

export const handleLogin = ({ success, email }) => {
  if (success) {
    return setUser({
      username: `jeffrey`,
      name: `jeffrey`,
      email: email,
    });
  }

  return false;
};

export const isLoggedIn = () => {
  const user = getUser();

  return !!user.username;
};

export const logout = (callback) => {
  setUser({});
  callback();
};
