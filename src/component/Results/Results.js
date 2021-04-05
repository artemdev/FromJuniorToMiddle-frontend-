import React from 'react';
import styles from './Results.module.scss';
import Diagram from '../Diagram';
import cat from './cat.svg';

const Results = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.results}>
        <h1 className={styles.title}>Results</h1>
        <h2 className={styles.subtitle}>[ Testing theory_]</h2>
        <hr className={styles.line} />
        <Diagram />
      </div>
      <div className={styles.feedback}>
        <img src={cat} alt="cat" className={styles.image} />
        <h2 className={styles.feedbackTitle}>Not bad!</h2>
        <h3 className={styles.feedbackSubtitle}>
          But you still need to learn some materials.
        </h3>
        <button className={styles.button}>Try again</button>
      </div>
    </div>
  );
};

export default Results;
