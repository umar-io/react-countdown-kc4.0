import { useState } from "react";
const Input = ({ setTotalSeconds, resetTimer }) => {
  const [inputSeconds, setInputSeconds] = useState("");
  const handleChange = (e) =>{
    setInputSeconds(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!isNaN(inputSeconds)){
        setTotalSeconds(parseInt(inputSeconds))
        resetTimer()
    }
  }
  return (
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          className="inputGroup"
          type="number"
          value={inputSeconds}
          onChange={handleChange}
          name="secondInput"
          placeholder="enter number of seconds"
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};
export default Input;
