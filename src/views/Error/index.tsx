
import React from "react";
import * as styles from './styles';

const ErrorView = () => {

    return (
        <>
            <div style={styles.mainContainer}>
                <p style={styles.errorText}>
                    Error 404 - страница не найдена
                </p>
            </div>
        </>
    );
}

export default ErrorView;