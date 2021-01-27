import { useEffect, useState } from "react";
import fire from "./firebase";
import "./App.css";
import Login from "./auth/Login";
import LogOut from "./auth/LogOut";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = async () => {
    setErr("");

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        setErr(err.message);
      });
  };

  const handleSignUp = async () => {
    setErr("");

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        setErr(err.message);
      });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.refreshToken);
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  });

  return (
    <div>
      {user ? (
        <LogOut handleLogOut={handleLogOut} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          handleSignUp={handleSignUp}
          err={err}
        />
      )}
    </div>
  );
}

export default App;
