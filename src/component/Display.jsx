const Display = ({ timer }) => {
  return (
    <div className="display">
      <p>
        Remaining Time:{" "}
        {(timer.hours > 9 ? timer.hours : "0" + timer.hours) +
          ":" +
          (timer.minutes > 9 ? timer.minutes : "0" + timer.minutes) +
          ":" +
          (timer.second > 9 ? timer.second : "0" + timer.second)}
      </p>
    </div>
  );
};

export default Display;
