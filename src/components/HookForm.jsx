import { useForm } from "react-hook-form";
import "./HookForm.css";

const HookForm = () => {
  const { register, handleSubmit } = useForm();

  const loginHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit(loginHandler)}>
        <div className="form-item">
          <label htmlFor="emailID">Email:</label>
          <input
            {...register("emailID")}
            placeholder="Enter your Email"
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password:</label>
          <input
            {...register("password")}
            placeholder="Enter your Password"
          />
        </div>
        <button className="form-btn">Submit</button>
      </form>
    </div>
  );
};

export default HookForm;
