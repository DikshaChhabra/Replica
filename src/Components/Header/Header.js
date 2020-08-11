import React from "react";
import { Typography, Divider } from "@material-ui/core";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <Typography variant="h5" className={styles.breadCrumbs}>
        Dashboard/Opportunity
      </Typography>
      <Typography variant="h5" className={styles.edit}>
        Edit
      </Typography>
      <Typography className={styles.headName} variant="h4">
        GENETECH - MANUFACTURING DATA SCIENTIST
      </Typography>
      <Divider className={styles.divider} />
    </div>
  );
}
