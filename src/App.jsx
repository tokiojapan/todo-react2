import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [isShow, setShow] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickToggleShow = () => setShow(!isShow);

  useEffect(() => {});
  if (num > 0 && num % 3 === 0) {
    isShow || setShow(true);
  } else {
    isShow && setShow(false);
  }

  return (
    <>
      <h1 style={{ color: "red" }}>hello, world!</h1>
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm fine!</ColorfulMessage>
      <button onClick={onClickCountUp}>count up</button>
      <button onClick={onClickToggleShow}>on/off</button>
      <br />
      <p>{num}</p>
      {isShow && <p>(^-^)</p>}
    </>
  );
};

export default App;
