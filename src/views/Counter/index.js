/*
файл, представленный в виде arrow function, 
содержащий всю html разметку и подключает переданные props для кнопок.
 */

import React from "react";

const Counter = ({ count, onIncrement, onDecrement, onReset }) => {
    return (
        <>
            <div>
                <p>Counter state: {count}</p>
                <Button onClick={onIncrement}>
                    Increment
                </Button>
                <Button onClick={onDecrement}>
                    Decrement
                </Button>
                <Button onClick={onReset}>
                    Reset
                </Button>
            </div>
        </>
    );
}

const Button = ({ onClick, children }) => {
    return (
        <button className="myButton" onClick={onClick}>
            {children}
        </button>
    );
}

export default Counter;