import React from "react";
import LocationScreen from "./LocationScreen";

const Location = ({ data }: any) => {
  const title = data.location.title;
  const intro = data.location.intro;
  return (
    <>
      <LocationScreen title={title} intro={intro} />
    </>
  );
};

export default Location;
