

import React from "react";
import * as styles from '../Counter/styles';
import { Button } from '@progress/kendo-react-buttons';

export type CounterControllerProps = {
    countersItems: React.ReactElement[];
    onAddCounter: () => void;
    onDeleteCounter: () => void;
    onResetCounters: () => void;
}

const CounterController = ({ countersItems, onAddCounter, onDeleteCounter, onResetCounters }: CounterControllerProps) => {

    return (
        <>
            <div style={styles.mainContainer}>
                <p style={styles.counterControllerText}>
                    Counter controller
                </p>
                <div style={styles.buttonsContainer}>
                    <Button
                        onClick={onAddCounter}
                        {...styles.addCounterButton}>
                        Add counter
                    </Button>
                    <Button
                        onClick={onDeleteCounter}
                        {...styles.deleteCounterButton}>
                        Delete counter
                    </Button>
                    <Button
                        onClick={onResetCounters}
                        {...styles.resetCountersButton}>
                        Reset counter
                    </Button>
                </div>
                <ul style={styles.listContainer}>
                    {countersItems}
                </ul>
            </div>
        </>
    );
}

export default CounterController;