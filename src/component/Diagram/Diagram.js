import React from 'react';
import { Pie, defaults } from 'react-chartjs-2';

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = 'right';

const Diagram = () => {
  return (
    <div>
      <Pie
        data={{
          labels: ['Incorrect', 'Correct'],
          datasets: [
            {
              data: [8, 92],
              backgroundColor: ['rgba(215,215,215,1)', 'rgba(255,107,1,1)'],
              borderWidth: 0,
            },
          ],
        }}
        height={285}
        width={285}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 16,
              fontColor: '#000000',
            },
          },
        }}
      />
    </div>
  );
};

export default Diagram;
