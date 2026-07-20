import "./TraditionalForm.css";

const TraditionalForm = () => {
  return (
    <div>
      <form className="form-container" action="">
        <div className="form-item">
          <label htmlFor="emailID">Email:</label>
          <input id="emailID" name="emailID" type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="text" />
        </div>
        <button className="form-btn">Submit</button>
      </form>
    </div>
  );
};

export default TraditionalForm;
