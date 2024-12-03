import { useEffect, useRef, useState } from "react";

interface Bar {
  id: number;
  value: number;
  max: number;
  isFilled: boolean;
}

let BAR_ID = 0;

const NEW_BAR = {
  VALUE: 0,
  MAX: 100,
};

const ProgressBar = () => {
  const [bars, setBars] = useState<Bar[]>([]);
  const barValueId = useRef<NodeJS.Timeout>();
  const secondsId = useRef<NodeJS.Timeout>();
  const [seconds, setSeconds] = useState<number>(0);
  const renderCount = useRef(0);

  renderCount.current += 1;

  const addNewBar = () => {
    const newBar = {
      id: ++BAR_ID,
      value: NEW_BAR.VALUE,
      max: NEW_BAR.MAX,
      isFilled: false,
    };
    setBars((pBars) => [...pBars, newBar]);
    return newBar;
  };

  const increaseBarValue = (id: number) => {
    setBars((pBars) =>
      pBars.map((bar) =>
        bar.id === id
          ? {
              ...bar,
              value: bar.value < 100 ? bar.value + 10 : bar.value,
              isFilled: bar.value + 10 === 100,
            }
          : bar
      )
    );
  };

  const onClickAddBar = () => {
    addNewBar();
    if (secondsId.current) {
      clearInterval(secondsId.current);
    }
    secondsId.current = setInterval(() => {
      setSeconds((p) => p + 1);
    }, 1000);
  };

  useEffect(() => {
    if (bars) {
      const matchedBarIndex = bars?.findIndex((bar) => !bar.isFilled);
      const matchedBar = bars[matchedBarIndex];
      if (matchedBar && !matchedBar.isFilled) {
        clearInterval(barValueId.current);
        barValueId.current = setInterval(() => {
          increaseBarValue(matchedBar.id);
        }, 200);
      }

      if (matchedBarIndex === -1) {
        clearInterval(barValueId.current);
        clearInterval(secondsId.current);
      }
    }
  }, [bars]);

  return (
    <>
      <p>Time Elapsed: {seconds} seconds</p>
      <p>Render Count: {renderCount.current}</p>
      <button
        onClick={onClickAddBar}
        className="rounded px-2 bg-gray-200 border mb-2"
      >
        Add
      </button>
      <div className="flex flex-col gap-3">
        {bars.map((bar) => (
          <progress
            key={bar.id}
            id={String(bar.id)}
            value={bar.value}
            max={bar.max}
          />
        ))}
      </div>
    </>
  );
};

export default ProgressBar;
