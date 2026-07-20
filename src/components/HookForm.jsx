import { useForm } from "react-hook-form";
import "./HookForm.css";

const HookForm = () => {
  const { register, formState:{errors}, handleSubmit } = useForm();

  const loginHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit(loginHandler)}>
        <div className="form-item">
          <label htmlFor="emailID">Email:</label>
          <input
            {...register("emailID", {required:true, maxLength:10})}
            id="emailID"
            placeholder="Enter your Email"
          />
          {errors.emailID && <p style={{color:"red"}}>Email is Required</p>}
        </div>
        <div className="form-item">
          <label htmlFor="password">Password:</label>
          <input
            {...register("password", {required:true, maxLength:10})}
            id="password"
            placeholder="Enter your Password"
          />
          {errors.password && <p style={{color:"red"}}>Password is Required</p>}
        </div>
        <button className="form-btn">Submit</button>
      </form>
    </div>
  );
};

export default HookForm;
