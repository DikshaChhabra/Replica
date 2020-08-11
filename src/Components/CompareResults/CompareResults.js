import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./CompareResults.module.css";

export default function CompareResults(props) {
  console.log(props);
  return (
    <div className={styles.root}>
      <Typography className={styles.blank}></Typography>
      <div className={styles.application}>
        {props.results.name === "No Skills Matched" ? (
          <Typography variant="h5">No Skills Matched</Typography>
        ) : (
          <div className={styles.candidateSkillButton}>
            <Typography variant="h5" className={styles.candidateSkill}>
              {props.results.name}
            </Typography>
            <Typography variant="h5" className={styles.candidateScore}>
              {props.results.candidateScore}
            </Typography>
          </div>
        )}
      </div>
      <Typography variant="h5" className={styles.verses}>
        {props.results.number}
      </Typography>
      <Typography variant="h5" className={styles.delivery}>
        {props.results.name === "No Skills Matched" ? (
          <Typography variant="h5">No Skills Matched</Typography>
        ) : (
          <div className={styles.businessSkillButton}>
            <Typography variant="h5" className={styles.businessScore}>
              {props.results.businessScore}
            </Typography>
            <Typography variant="h5" className={styles.businessSkill}>
              {props.results.name}
            </Typography>
          </div>
        )}
      </Typography>
    </div>
  );
}
