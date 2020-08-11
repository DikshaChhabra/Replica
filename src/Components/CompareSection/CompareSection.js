import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./CompareSection.module.css";

export default function CompareSection(props) {
  return (
    <div className={styles.root}>
      <Typography variant="h5" className={styles.sectionName}>
        {props.sectionName}
      </Typography>

      <Typography
        variant="h5"
        className={`${styles.compareField} ${styles.candidate}`}
      >
        Candidate
      </Typography>
      <Typography variant="h5" className={styles.verses}>
        VS
      </Typography>
      <Typography
        variant="h5"
        className={`${styles.compareField} ${styles.business}`}
      >
        Business
      </Typography>
    </div>
  );
}
