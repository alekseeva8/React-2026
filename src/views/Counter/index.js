/*
файл, представленный в виде arrow function, 
содержащий всю html разметку и подключает переданные props для кнопок.
 */

import React from "react";
import * as styles from './styles';
import { Button } from '@progress/kendo-react-buttons';


const Counter = ({ count, onIncrement, onDecrement, onReset }) => {
    return (
        <>
            <div style={styles.mainContainer}>
                <p style={styles.counterText}>
                    Counter state: {count}
                </p> 
                <div style={styles.buttonsContainer}>
                    <Button
                        onClick={onIncrement}
                        {...styles.incrementButton}>
                        Increment
                    </Button>
                    <Button
                        onClick={onDecrement}
                        {...styles.decrementButton}>
                        Decrement
                    </Button>
                    <Button
                        onClick={onReset}
                        {...styles.resetButton}>
                        Reset
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Counter;