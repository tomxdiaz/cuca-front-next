import React from 'react';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import TariffsScreen from '../src/components/Tariffs/TariffsScreen';
import Api from '../src/services/api/api';

const TariffsPage = ({ data }: any) => {
  const { tariffs, notes } = data;
  const tariffsTitle = tariffs.title;
  const tariffsContent = tariffs.content;
  const tariffsMainPic = tariffs.mainpic;

  return (
    <>
      <Header data={data} />
      <TariffsScreen tariffsTitle={tariffsTitle} tariffsContent={tariffsContent} tariffsMainPic={tariffsMainPic} />
      <Footer data={data} />
    </>
  );
};

export default TariffsPage;

export const getStaticProps = async () => {
  const testData: any = await Api.getData();
  return {
    props: {
      data: testData.data,
    },
  };
};
