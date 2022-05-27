import React, { useState, useEffect, useRef } from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../services/auth";
import useFirebase from "../components/useFirebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Layout
import LoginLayout from "../layouts/login";

// Components
import CreateUserForm from "../components/createUserForm";
import LoginForm from "../components/loginForm";

const Login = ({ location }) => {
  const [message, setMessage] = useState("");
  const [newUser, setNewUser] = useState(false);
  const [userData, setUserData] = useState(""); // Revisit getting info from Firebase
  const firebase = useFirebase();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (location.state) {
      setNewUser(location.state.newUser);
    }
  }, []);

  const createUser = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        handleLogin({ success: true, email: email });
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(
          errorMessage
            .slice(errorMessage.indexOf("/") + 1)
            .split("-")
            .join(" ")
        );
      });
  };

  const signInUser = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        handleLogin({ success: true, email: email });
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorMessage = error.code;
        setMessage(
          errorMessage
            .slice(errorMessage.indexOf("/") + 1)
            .split("-")
            .join(" ")
        );
      });
  };

  const handleCreateUserSubmit = (e) => {
    e.preventDefault();
    createUser(emailRef.current.value, passwordRef.current.value);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    signInUser(emailRef.current.value, passwordRef.current.value);
  };

  if (isLoggedIn()) {
    navigate("/dashboard");
    return null;
  } else {
    return (
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
              firstNameRef={firstNameRef}
              lastNameRef={lastNameRef}
              emailRef={emailRef}
              passwordRef={passwordRef}
              message={message}
              handleSubmit={handleCreateUserSubmit}
            />
            <p className="text-center my-6">
              Already have an account? Click&nbsp;
              <button
                className="underline text-blue-400"
                onClick={() => {
                  setNewUser(false);
                  setMessage("");
                }}
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
                onClick={() => {
                  setNewUser(true);
                  setMessage("");
                }}
              >
                here
              </button>
            </p>
          </>
        )}
      </LoginLayout>
    );
  }
};

export default Login;
