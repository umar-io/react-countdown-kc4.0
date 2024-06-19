import playBtn from "../assets/Play.png";
import stopBtn from "../assets/Stop.png";
import pauseBtn from "../assets/Pause.png"
import resetBtn from "../assets/Reset.png";
const Controller = ({
  startCountingDown,
  resetTimer,
  counting,
  stopCountingDown,
  pauseCountingDown
}) => {
  return (
    <div className="controller">
      {counting ? (
        <button onClick={pauseCountingDown}>
          <img src={pauseBtn} alt="" />
        </button>
      ) : (
        <button onClick={startCountingDown}>
          <img src={playBtn} alt="" />
        </button>
      )}
      <button onClick={stopCountingDown}>
        <img src={stopBtn} alt="" />
      </button>

      <button onClick={resetTimer}>
        <img src={resetBtn} alt="" />
      </button>
    </div>
  );
};
export default Controller;
