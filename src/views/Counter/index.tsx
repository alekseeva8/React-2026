/*
файл, представленный в виде arrow function, 
содержащий всю html разметку и подключает переданные props для кнопок.
 */

import React from "react";
import * as styles from "./styles";
import { Button } from "@progress/kendo-react-buttons";

export type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

const Counter = ({ count, onIncrement, onDecrement, onReset }: CounterProps) => {
  return (
    <>
      <div style={styles.counterContainer}>
        <p style={styles.counterText}>Counter state: {count}</p>
        <div style={styles.buttonsContainer}>
          <Button onClick={onIncrement} {...styles.incrementButton}>
            Increment
          </Button>
          <Button onClick={onDecrement} {...styles.decrementButton}>
            Decrement
          </Button>
          <Button onClick={onReset} {...styles.resetButton}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default Counter;
