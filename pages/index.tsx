import React from 'react';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import Api from '../src/services/api/api';

const HomePage = ({ data }: any) => {
  return (
    <>
      <Header data={data} />
      <Home data={data} />
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

export default HomePage;
