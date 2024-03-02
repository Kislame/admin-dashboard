import React from 'react';
import PieChartCom from '../components/PieChart';
import BarChartCom from '../components/BarChartCom';
import Stats from '../components/Stats';
import Card from '../components/Card';

const Sales = () => {
  return (
    <div className="flex  flex-col justify-between gap-[10px] ">
      <Stats />
      <section className="flex md:flex-row flex-col items-center justify-between">
        <section className="w-[380px] h-[200px]">
          <BarChartCom />
        </section>

        <PieChartCom />
      </section>
      <Card />
    </div>
  );
};

export default Sales;
