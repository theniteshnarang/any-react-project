import { useEffect, useRef, useState } from "react";
import { Bar } from "./ProgressBarInSeries";
import { NEW_BAR } from "./constant";

let BAR_ID = 0;

interface BarValueId {
  [x: number]: NodeJS.Timeout;
}

const ProgressBarInParellel = () => {
  const [bars, setBars] = useState<Bar[]>([]);
  const renderCount = useRef(0);
  const barValueId = useRef<BarValueId>({});

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
    const addedBar = addNewBar();

    barValueId.current[addedBar.id] = setInterval(() => {
      increaseBarValue(addedBar.id);
    }, 200);
  };

  useEffect(() => {
    if (bars) {
      Object.keys(barValueId.current).forEach((barId) => {
        const bar = bars.find((b) => b.id === +barId);
        if (bar?.id && bar.isFilled) {
          clearInterval(barValueId.current[bar?.id]);
        }
      });
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

export default ProgressBarInParellel;
