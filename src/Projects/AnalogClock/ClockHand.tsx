interface Props {
  height?: number;
  width?: number;
  angle: number;
}

const ClockHand = ({ height = 1, width = 1, angle }: Props) => {
  return (
    <div
      className="clock-hand"
      aria-hidden
      style={{
        transform: `rotate(${angle}deg) scaleY(${height}) scaleX(${width})`,
      }}
    />
  );
};

export default ClockHand;
