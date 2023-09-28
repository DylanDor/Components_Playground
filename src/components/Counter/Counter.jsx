import { useState } from "react";
import "./Counter.scss";
import { useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    const randomIncrement = Math.floor(Math.random() * 10) + 1;
    const newCount = count + randomIncrement;
    if (newCount > 100) {
      setCount(100)
    } else {
      setCount(newCount);
    }
  }

  const resetCounter = () => {
    setCount(0)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        updateCount();
      } else {
        clearInterval(interval);
      }
    }, Math.floor(Math.random() * 200) + 1);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="counter_number" onClick={resetCounter}>
      {count}%
    </div>
  );
};
