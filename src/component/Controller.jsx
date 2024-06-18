import playBtn from "../assets/Play.png";
import pauseBtn from "../assets/Pause.png";
import resetBtn from "../assets/Reset.png";
const Controller = ({ startTimer , resetTimer}) => {
  return (
    <div className="controller">
      <button >
        <img src={pauseBtn} alt="" />
      </button>
      <button onClick={startTimer}>
        <img src={playBtn} alt="" />
      </button>
      <button onClick={resetTimer}>
        <img src={resetBtn} alt="" />
      </button>
    </div>
  );
};
export default Controller;
