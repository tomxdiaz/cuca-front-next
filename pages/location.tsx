import React from 'react';
import Footer from '../src/components/Footer/Footer';
import Location from '../src/components/Location/Location';
import Header from '../src/components/Header/Header';
import Api from '../src/services/api/api';

const LocationPage = ({ data }: any) => {
  return (
    <>
      <Header data={data} />
      <Location data={data} />
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

export default LocationPage;
