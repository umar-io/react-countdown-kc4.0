import { useState, useEffect } from "react";
import Input from "./component/Input";
import Display from "./component/Display";
import Controller from "./component/Controller";
const App = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);

  const startTimer = () => {
    setTimerActive(true);
    setTimerPaused(false);
  };

  const pauseTimer = () => {
    setTimerPaused(true);
  };

  const resetTimer = () => {
    setTimerActive(false);
    setTimerPaused(false);
    setRemainingSeconds(totalSeconds);
  };

  useEffect(() => {
    let intervalId;
    if (timerActive && !timerPaused && remainingSeconds > 0) {
      intervalId = setInterval(() => {
          setRemainingSeconds(prevSeconds => prevSeconds - 1)
      }, 1000)
  } else if (remainingSeconds === 0) {
      clearInterval(intervalId)
  }
    return () => clearInterval(intervalId);
  }, [timerActive, timerPaused, remainingSeconds]);

  return (
    <div className="container">
      <h3>Countdown Timer</h3>
      <Display remainingSeconds={remainingSeconds} />
      <Input setTotalSeconds={setTotalSeconds} resetTimer={resetTimer} />
      <Controller
        timerActive={timerActive}
        timerPaused={timerPaused}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};
export default App;
