import { useState } from "react";

const Example = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);
      
    return(
    <>
        <p>ボタンAを{countA}回押しました！</p>
        <buttun onClick={() => setCountA(countA + 1)}>ボタンA</buttun>
        <p>ボタンBを{countB}回押しました！</p>
        <buttun onClick={() => setCountB(countB + 1)}>ボタンB</buttun>
        <p>ボタンCを{countC}回押しました！</p>
        <buttun onClick={() => setCountC(countC + 1)}>ボタンC</buttun>
    </>
);
};

export default Example;