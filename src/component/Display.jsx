const Display = ({ timer }) => {
  return (
    <div className="display">
      <p>
        Remaining Time:{" "}
        {timer.hours}  :
        {timer.minutes}  :
        {timer.second}
      </p>
    </div>
  );
};

export default Display;
