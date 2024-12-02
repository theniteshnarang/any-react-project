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
  const timerId = useRef<NodeJS.Timeout>();
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
      pBars.map((bar) => {
        if (bar.id === id) {
          return {
            ...bar,
            value: bar.value < 100 ? bar.value + 10 : bar.value,
            isFilled: bar.value + 10 === 100,
          };
        } else {
          return bar;
        }
      })
    );
  };

  const onClickAddBar = () => {
    const barAdded = addNewBar();
    if (bars.length === 0) {
      timerId.current = setInterval(() => {
        increaseBarValue(barAdded.id);
      }, 200);
    }
  };

  useEffect(() => {
    if (bars) {
      const matchedBarIndex = bars?.findLastIndex((bar) => bar.isFilled);
      const matchedBar = bars[matchedBarIndex];
      if (matchedBar && matchedBar.isFilled) {
        clearInterval(timerId.current);
        const nextBar = bars[matchedBarIndex + 1];
        if (nextBar) {
          timerId.current = setInterval(() => {
            increaseBarValue(nextBar.id);
          }, 200);
        }
      }
    }
  }, [bars]);

  return (
    <>
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
