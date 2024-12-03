import ClockHand from "./ClockHand";
import useTime from "./useTime";
import "./Clock.css";

const AnalogClock = () => {
  const { hh, mm, ss } = useTime();

  return (
    <div className="clock">
      <ClockHand height={0.5} angle={0} width={3} />
      <ClockHand height={0.9} angle={45} width={2} />
      <ClockHand height={0.8} angle={90} />
    </div>
  );
};

export default AnalogClock;
