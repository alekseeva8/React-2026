
import React, { useState } from "react";
import Counter, { CounterProps } from '../views/Counter/index';
import CounterController, { CounterControllerProps } from '../views/CounterController/index';

const initialCounters = [{ id: crypto.randomUUID(), count: 0 }];

const CounterContainer = () => {
    const [counters, setCounters] = useState(initialCounters);

    const handleIncrement = (index: number) => {
        const newCounters = counters.map((counter, i) => {
            return (i === index) ? { ...counter, count: counter.count + 1 } : counter
        });
        setCounters(newCounters);
    };

    const handleDecrement = (index: number) => {
        const newCounters = counters.map((counter, i) => {
            return (i === index) ? { ...counter, count: counter.count - 1 } : counter
        });
        setCounters(newCounters);
    };

    const handleReset = (index: number) => {
        const newCounters = counters.map((counter, i) => {
            return (i === index) ? { ...counter, count: 0 } : counter
        });
        setCounters(newCounters);
    };

    const handleAddCounter = () => {
        const newCounter = { id: crypto.randomUUID(), count: 0 };
        const newCounters = counters.map((counter, index) => {
            return (index % 2 === 0) ? { ...counter, count: counter.count + 1 } : counter;
        }
        );
        setCounters([...newCounters, newCounter]);
    };

    const handleDeleteCounter = () => {
        if (counters.length > 1) {
            const newCounters = counters.slice(0, length - 1).map((counter, index) => {
                return (index % 2 !== 0) ? { ...counter, count: counter.count - 1 } : counter;
            }
            );
            setCounters(newCounters);
        }
    };

    const handleResetCounters = () => {
        setCounters([{ id: crypto.randomUUID(), count: 0 }]);
    };

    const countersItems = counters.map((counter, index) => {
        const props: CounterProps = {
            count: counter.count,
            onIncrement: () => handleIncrement(index),
            onDecrement: () => handleDecrement(index),
            onReset: () => handleReset(index)
        };
        return (<li key={counter.id}><Counter {...props} /></li>);
    });

    const countersProps: CounterControllerProps = {
        countersItems: countersItems,
        onAddCounter: handleAddCounter,
        onDeleteCounter: handleDeleteCounter,
        onResetCounters: handleResetCounters
    }

    return (<CounterController {...countersProps} />);
    
}

export default CounterContainer;

