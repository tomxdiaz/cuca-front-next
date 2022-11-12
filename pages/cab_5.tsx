import React from 'react';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import UnitScreen from '../src/components/Unit/UnitScreen';
import Api from '../src/services/api/api';

const Unit_cab_5_page = ({ data }: any) => {
  let thisUnitCode = 'unit_cab_5';
  let thisUnit = null;

  data.units.forEach((unit: any) => {
    if (thisUnitCode == unit.code) {
      thisUnit = unit;
    }
  });

  return (
    <>
      <Header data={data} />
      <UnitScreen unit={thisUnit} />
      <Footer data={data} />
    </>
  );
};

export default Unit_cab_5_page;

export const getStaticProps = async () => {
  const testData: any = await Api.getData();
  return {
    props: {
      data: testData.data,
    },
  };
};
