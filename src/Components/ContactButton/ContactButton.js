import React from "react";
import { Button } from "@material-ui/core";
import styles from "./ContactButton.module.css";

export default function ContactButton() {
  return (
    <Button variant="contained" className={styles.contact}>
      Contact Us
    </Button>
  );
}
