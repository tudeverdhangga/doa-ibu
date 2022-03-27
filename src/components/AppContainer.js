import React from "react";
import NewsSection from "./news-section";
import PensTVSection from "./pens-tv";
import ProgramPens from "./program-pens";
import Banner from './banner'
import StatisticArea from './statistic-area';


const AppContainer = () => {
  return (
    <>
      <Banner />
      <NewsSection />
      <StatisticArea />
      <ProgramPens />
      <PensTVSection />
    </>
  );
};

export default AppContainer;
