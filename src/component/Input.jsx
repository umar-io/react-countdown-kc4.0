import { useState } from "react";
const Input = ({ getRemainingTime, setTimer }) => {
  const [seconds, setSeconds] = useState("");
  const handleChange = (e) => {
    setSeconds(e.target.value);
  };
  const submitSeconds = (e) => {
    e.preventDefault();
    if (seconds !== "") {

      setTimer(getRemainingTime(seconds));

      setSeconds({
        seconds: "",
      });


    } else {
      alert("seconds field cannot be empty!!");
    }
  };
  return (
    <div>
      <form className="inputForm">
        <input
          className="inputGroup"
          type="number"
          value={seconds}
          onChange={handleChange}
          name="secondInput"
          placeholder="enter number of seconds"
        />
        <button type="submit" onClick={submitSeconds}>
          Go
        </button>
      </form>
    </div>
  );
};
export default Input;
