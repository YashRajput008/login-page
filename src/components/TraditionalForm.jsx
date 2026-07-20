import { useState } from "react";
import "./TraditionalForm.css";

const TraditionalForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const loginHandler = (event) => {
    event.preventDefault();
    console.log("loginHandle");

    if (email === "") {
      setErrors((prev) => ({ ...prev, email: "Email is Required" }));
    }

    if (password === "") {
      setErrors((prev) => ({ ...prev, password: "Password is Required" }));
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={loginHandler}>
        <div className="form-item">
          <label htmlFor="emailID">Email:</label>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="emailID"
            name="emailID"
            value={email}
            type="text"
            placeholder="Enter your Email"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div className="form-item">
          <label htmlFor="password">Password:</label>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            id="password"
            name="password"
            value={password}
            type="password"
            placeholder="Enter your Password"
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <button className="form-btn">Submit</button>
      </form>
    </div>
  );
};

export default TraditionalForm;
