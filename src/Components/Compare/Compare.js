import React from "react";
import styles from "./Compare.module.css";
import Header from "../../Components/Header/Header";
import SubHeader from "../../Components/SubHeader/SubHeader";
import LeftBar from "../../Components/LeftBar/LeftBar";
import RightBar from "../../Components/RightBar/RightBar";

export default function Compare() {
  return (
    <div className={styles.root}>
      <Header />
      <SubHeader />
      <div className={styles.compareSection}>
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}
