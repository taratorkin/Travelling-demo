import React, { Fragment } from 'react';
import styles from './css/honeymoon.min.css'

export default function Honeymoon() {
  return (
    <Fragment>
      <div className={styles.honeymoon}>
        <div className={styles.text}>
          <p className={styles.text__headline}>Destinations for Honeymoon</p>
          <p className={styles.text__mainText}>Honeymoons are the perfect fuel to start your never-ending life of Love. Who does not want
            a Honeymoon where the sand<br /> is swept away from beneath you by the waves that kiss your feet, or one where you are surrounded<br /> by
            natures green canopy while you stand hand in hand with your soul mate!</p>
        </div>
        <div className={styles.destinations}>
          <div className={styles.destinations__container}>
            <div className={styles.destinations__container__image}></div>
            <div className={styles.destinations__container__description}></div>
          </div>
          <div className={styles.destinations__container}>
            <div className={styles.destinations__container__image}></div>
            <div className={styles.destinations__container__description}></div>
          </div>
          <div className={styles.destinations__container}>
            <div className={styles.destinations__container__image}></div>
            <div className={styles.destinations__container__description}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
