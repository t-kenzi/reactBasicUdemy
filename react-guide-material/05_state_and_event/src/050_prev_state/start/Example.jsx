import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
    setCount(prevstate => {
        return prevstate + 1;
    });
  }
  const countDown = () => {
    setCount(count - 1);
  };
  
    return(
        <>
            <p>現在のカウント数：{count}</p>
            <button
            onClick={countUp}
            >+</button>
            <buttun
            onClick={countDown}
            >-</buttun>
        </>
    );
};

export default Example;
