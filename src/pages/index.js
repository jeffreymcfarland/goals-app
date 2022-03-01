import * as React from "react";
import useFirebase from "../components/useFirebase";

import LoginLayout from "../layouts/login";
import LoginForm from "../components/loginForm";

// markup
const IndexPage = () => {
  const [userAuth, setUserAuth] = React.useState();
  const firebase = useFirebase();

  React.useEffect(() => {
    if (!firebase) return console.log("ERROR ---- NO USER");
    return firebase.auth().onAuthStateChanged((user) => {
      setUserAuth(user);
    });
  }, [firebase]);

  return userAuth ? (
    <h1>Logged In</h1>
  ) : (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
};

export default IndexPage;
