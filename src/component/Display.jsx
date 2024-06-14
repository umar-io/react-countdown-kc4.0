const Display = ({ remainingSeconds }) => {
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time % 3600 / 60);
    const seconds = Math.floor(minutes / 60);
    return `
      ${hours.toString().padStart(2, "0")}
      :${minutes.toString().padStart(2, "0")}
      :${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div className="display">
      <p>Remaining Time: {formatTime(remainingSeconds)}</p>
    </div>
  );
};

export default Display;
