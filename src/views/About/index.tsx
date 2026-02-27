import React from "react";
import * as styles from "./styles";
import * as data from "../../shared/constants/index";

const AboutView = () => {
  return (
    <>
      <div style={styles.mainContainer}>
        <p style={styles.heading}>ИНТЕРМЕХ</p>
        {data.companyInfo.map((text, index) => {
          return (
            <p key={index} style={styles.text}>
              {text}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default AboutView;
