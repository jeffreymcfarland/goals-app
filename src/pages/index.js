import * as React from "react";
import useFirebase from "../components/useFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Layout
import LoginLayout from "../layouts/login";
import DashboardLayout from "../layouts/dashboard";

// Components
import CreateUserForm from "../components/createUserForm";
import LoginForm from "../components/loginForm";
import NavBar from "../components/navBar";

const IndexPage = () => {
  const [message, setMessage] = React.useState("");
  const [userAuth, setUserAuth] = React.useState();
  const [newUser, setNewUser] = React.useState(false);
  const [user, setUser] = React.useState(""); // Revisit getting info from Firebase
  const firebase = useFirebase();

  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const createUser = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(errorMessage.slice(10, errorMessage.indexOf("(")));
      });
  };

  const signInUser = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(errorMessage.slice(10, errorMessage.indexOf("(")));
      });
  };

  const signOutUser = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserAuth();
        console.log("sign out succesful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    console.log(user);
    if (!firebase) return console.log("ERROR ---- NO USER");
    return firebase.auth().onAuthStateChanged((user) => {
      setUserAuth(user);
    });
  }, [firebase]);

  const handleCreateUserSubmit = (e) => {
    e.preventDefault();
    createUser(emailRef.current.value, passwordRef.current.value);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    signInUser(emailRef.current.value, passwordRef.current.value);
  };

  return userAuth ? (
    <DashboardLayout>
      <NavBar signOutUser={signOutUser} />
      <h1>Hello</h1>
    </DashboardLayout>
  ) : (
    <LoginLayout>
      <h1 className="font-semibold text-2xl text-center mb-4">
        Welcome to My Goals!
      </h1>
      <p className={`text-md text-center ${message ? "mb-1" : "mb-6"}`}>
        {newUser
          ? "Enter an email and password to create a new account"
          : "Enter your account email and password to login"}
      </p>
      {newUser ? (
        <>
          <CreateUserForm
            emailRef={emailRef}
            passwordRef={passwordRef}
            message={message}
            handleSubmit={handleCreateUserSubmit}
          />
          <p className="text-center my-6">
            Already have an account? Click&nbsp;
            <button
              className="underline text-blue-400"
              onClick={() => setNewUser(false)}
            >
              here
            </button>
          </p>
        </>
      ) : (
        <>
          <LoginForm
            emailRef={emailRef}
            passwordRef={passwordRef}
            message={message}
            handleSubmit={handleSignInSubmit}
          />
          <p className="text-center my-6">
            Need to make an account? Click&nbsp;
            <button
              className="underline text-blue-400"
              onClick={() => setNewUser(true)}
            >
              here
            </button>
          </p>
        </>
      )}
    </LoginLayout>
  );
};

export default IndexPage;
