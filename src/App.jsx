import { useRef, useState, useEffect } from "react";
import Input from "./component/Input";
import Display from "./component/Display";
import Controller from "./component/Controller";
const App = () => {
  const Ref = useRef(null);

  const [timer, setTimer] = useState({
    total: "",
    hours: "0",
    minutes: "0",
    second: "0",
  });

  const getRemainingTime = (seconds) => {
    const total = seconds;
    const second = Math.floor(total % 60);
    const minutes = Math.floor((total / 60) % 60);
    const hours = Math.floor((total / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      second,
    };
  };

  const startTimer = (seconds) => {
    let { total, hours, minutes, second } = getRemainingTime(seconds);
    if (total >= 0) {
      setTimer(hours + ":" + minutes + ":" + second);
    }
  };

  const resetTimer = (e) => {
    setTimer({
      total: "",
      hours: "0",
      minutes: "0",
      second: "0",
    });

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  return (
    <div className="container">
      <h3>Countdown Timer</h3>
      <Display timer={timer} />
      <Input getRemainingTime={getRemainingTime} setTimer={setTimer} />
      <Controller startTimer={startTimer} resetTimer={resetTimer} />
    </div>
  );
};
export default App;
