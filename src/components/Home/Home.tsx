import React from "react";
import HomeScreen from "./Home.screen";

const Home = ({ data }: any) => {
  return (
    <>
      <HomeScreen summary={data.summary} homeImages={data.pics.home} />
    </>
  );
};

export default Home;
