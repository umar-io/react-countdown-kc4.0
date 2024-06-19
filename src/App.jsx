import { useState, useEffect, useCallback } from "react";
import Input from "./component/Input";
import Display from "./component/Display";
import Controller from "./component/Controller";

const App = () => {
  const [timer, setTimer] = useState({
    total: "00",
    hours: "00",
    minutes: "00",
    second: "00",
  });

  const getRemainingTime = useCallback((seconds) => {
    const total = seconds;
    const second = Math.floor(total % 60);
    const minutes = Math.floor((total / 60) % 60);
    const hours = Math.floor((total / 60 / 60) % 24);
    return {
      total,
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      second: second.toString().padStart(2, "0"),
    };
  }, []);

  const startTimer = (seconds) => {
    const { total, hours, minutes, second } = getRemainingTime(seconds);
    const formattedTime = `${hours}:${minutes}:${second}`;
    setTimer(formattedTime);
  };

  const resetTimer = (e) => {
    setCounting(false);

    setTimer({
      total: "0",
      hours: "00",
      minutes: "00",
      second: "00",
    });
  };

  const [counting, setCounting] = useState(false);

  const startCountingDown = () => {
    setCounting(true);
  };

  const pauseCountingDown = () => {
    setCounting(false);
  };

  const stopCountingDown = () => {
    setCounting(false);
    setTimer({
      total: "0",
      hours: "00",
      minutes: "00",
      second: "00",
    });
  };

  useEffect(() => {
    let intervalId;
    if (counting && timer && timer.total > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer && prevTimer.total > 0) {
            return getRemainingTime(prevTimer.total - 1);
          } else {
            return prevTimer;
          }
        });
      }, 1000);
    } else if (timer && timer.total === 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [counting, timer]);

  return (
    <div className="container">
      <h3>Countdown Timer</h3>
      <Display timer={timer} />
      <Input getRemainingTime={getRemainingTime} setTimer={setTimer} />
      <Controller
        startCountingDown={startCountingDown}
        resetTimer={resetTimer}
        counting={counting}
        setCounting={setCounting}
        stopCountingDown={stopCountingDown}
        pauseCountingDown={pauseCountingDown}
      />
    </div>
  );
};
export default App;
