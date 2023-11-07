import "./FormComponent.css";
import { useState } from "react";

const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [rePasswordColor, setRePasswordColor] = useState("");

  const validateForm = (e) => {
    e.preventDefault();

    if (userName.length > 7) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("Username must be at least 8 characters");
      setUserNameColor("red");
    }

    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Invalid Email");
      setEmailColor("red");
    }

    if (password.length > 7) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be at least 8 characters");
      setPasswordColor("red");
    }

    if (repassword != "" && repassword === password) {
      setErrorRePassword("");
      setRePasswordColor("green");
    } else {
      setErrorRePassword("Password not match");
      setRePasswordColor("red");
    }
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={validateForm}>
          <h2>Registration Form</h2>
          <div className="form-control">
            <label>Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ borderColor: userNameColor }}
            />
            <small style={{ color: "red" }}>{errorUserName}</small>
          </div>
          <div className="form-control">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: emailColor }}
            />
            <small style={{ color: "red" }}>{errorEmail}</small>
          </div>
          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderColor: passwordColor }}
            />
            <small style={{ color: "red" }}>{errorPassword}</small>
          </div>
          <div className="form-control">
            <label>Confirm Password</label>
            <input
              type="password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              style={{ borderColor: rePasswordColor }}
            />
            <small style={{ color: "red" }}>{errorRePassword}</small>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default FormComponent;
