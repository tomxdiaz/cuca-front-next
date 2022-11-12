import React from 'react';
import Api from '../src/services/api/api';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import ServicesScreen from '../src/components/Services/ServicesScreen';

const ServicesPage = ({ data }: any) => {
  return (
    <>
      <Header data={data} />
      <ServicesScreen data={data} />
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

export default ServicesPage;
