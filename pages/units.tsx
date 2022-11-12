import React from 'react';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import UnitsScreen from '../src/components/Units/UnitsScreen';
import Api from '../src/services/api/api';

const UnitsPage = ({ data }: any) => {
  const unitsPics = data.pics.units;
  const { welcomeDesc } = data;

  return (
    <>
      <Header data={data} />
      <UnitsScreen unitsPics={unitsPics} welcomeDesc={welcomeDesc} />
      <Footer data={data} />
    </>
  );
};

export const getStaticProps = async () => {
  const testData: any = await Api.getData();
  return {
    props: {
      data: testData.data,
    },
  };
};

export default UnitsPage;
