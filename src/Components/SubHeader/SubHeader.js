import React from "react";
import { Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

import ContactButton from "../ContactButton/ContactButton";

import styles from "./SubHeader.module.css";

export default function SubHeader() {
  return (
    <div className={styles.main}>
      <div className={styles.name}>
        <PersonIcon style={{ color: "rgb(152 146 146)", marginRight: 10 }} />
        <Typography variant="h5">Aditya Agrawal</Typography>
      </div>
      <div className={styles.contact}>
        <ContactButton />
      </div>
    </div>
  );
}
