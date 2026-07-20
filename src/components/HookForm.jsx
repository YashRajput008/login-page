import { useState } from "react";
import "./HookForm.css";

const HookForm = () => {
  

  const loginHandler = (event) => {
    event.preventDefault();
    console.log("loginHandle");
  };

  return (
    <div>
      <form className="form-container" onSubmit={loginHandler}>
        <div className="form-item">
          <label htmlFor="emailID">Email:</label>
          <input
            id="emailID"
            name="emailID"
            type="text"
            placeholder="Enter your Email"
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <button className="form-btn">Submit</button>
      </form>
    </div>
  );
};

export default HookForm;
