import styles from "./App.module.css";
import ButtonsConatiner from "./components/ButtonsContainer";
import Display from "./components/display";
import { useState } from "react";

function App() {
  const [calVal, setVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setVal(" ");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsConatiner onButtonClick={onButtonClick}></ButtonsConatiner>
    </div>
  );
}

export default App;
