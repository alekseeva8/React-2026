import React from "react";
import * as styles from './styles';
import * as data from './data';

const AboutView = () => {

    return (
        <>
            <div style={styles.mainContainer}>
                <p style={styles.heading}>
                    ИНТЕРМЕХ
                </p>
                <p style={styles.text}>
                    {data.text1}
                </p>
                <p style={styles.text}>
                    {data.text2}
                </p>
                <p style={styles.text}>
                    {data.text3}
                </p>
                <p style={styles.text}>
                    {data.text4}
                </p>
            </div>
        </>
    );
}

export default AboutView;