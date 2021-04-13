import React from 'react';
import PropTypes from 'prop-types';
import { Pie, defaults } from 'react-chartjs-2';

import styles from './Diagram.module.scss';
// import "chartjs-plugin-labels";

// defaults.global.legend.position = "right";
defaults.global.responsive = true;

const Diagram = ({ correct, total }) => {
  const pсtCorrect = Math.round((correct * 100) / total);
  const pсtIncorrect = 100 - pсtCorrect;

  const data = {
    labels: [`${pсtCorrect}% Correct`, `${pсtIncorrect}% Incorrect`],
    datasets: [
      {
        data: [pсtCorrect, pсtIncorrect],
        backgroundColor: ['rgba(255,107,1,1)', 'rgba(215,215,215,1)'],
        borderWidth: 0,
        // hoverOffset: 4,
      },
    ],
  };

  const options = {
    // plugins: {
    //   labels: {
    //     render: "label",
    //     position: "outside",
    //   },
    // },
    maintainAspectRatio: false,
    legend: {
      position: 'right',
      align: 'center',
      display: true,
      labels: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 16,
        fontColor: '#000000',
        boxWidth: 16,
      },
    },
    rotation: 0,
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          let label = data.labels[tooltipItem.index];
          return label;
        },
      },
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.diagram}>
        <Pie data={data} width={285} height={285} options={options} />
      </div>
      <div className={styles.result}>
        <p className={styles.text}>
          Correct answers - <span className={styles.number}>{correct}</span>
        </p>
        <p className={styles.text}>
          Total questions - <span className={styles.number}>{total}</span>
        </p>
      </div>
    </div>
  );
};

Diagram.propTypes = {
  correct: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Diagram;
