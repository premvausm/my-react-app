import styles from "./App.module.css";
import ButtonsConatiner from "./components/ButtonsContainer";
import Display from "./components/display";
import { useState } from "react";

function App() {
  const [calVal, setVal] = useState("45");
  const onButtonClick = (event) => console.log(event);

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsConatiner onButtonClick={onButtonClick}></ButtonsConatiner>
    </div>
  );
}

export default App;
