import React from "react";
import { Typography } from "@material-ui/core";

import CompareSection from "../CompareSection/CompareSection";

import styles from "./RightBar.module.css";
import CompareResults from "../CompareResults/CompareResults";

import Data from "./Data.json";

export default function RightBar() {
  return (
    <div className={styles.rightRoot}>
      <Typography variant="h4" className={styles.rightHead}>
        Technical Skills
      </Typography>
      <div className={styles.compareSection}>
        <CompareSection sectionName="Applications" />
        {Data.application.map((data) => {
          return (
            <CompareResults
              results={{
                name: data.name,
                candidateScore: data.candidateScore,
                businessScore: data.businessScore,
                number: data.number,
              }}
            />
          );
        })}
        <CompareSection sectionName="Career" />
        {Data.career.map((data) => {
          return (
            <CompareResults
              results={{
                name: data.name,
                candidateScore: data.candidateScore,
                businessScore: data.businessScore,
                number: data.number,
              }}
            />
          );
        })}
        <CompareSection sectionName="Delivery" />
        {Data.delivery.map((data) => {
          return (
            <CompareResults
              results={{
                name: data.name,
                candidateScore: data.candidateScore,
                businessScore: data.businessScore,
                number: data.number,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
