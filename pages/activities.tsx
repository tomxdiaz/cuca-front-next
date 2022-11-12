import React from 'react';
import ActivitiesScreen from '../src/components/Activities/ActivitiesScreen';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import Api from '../src/services/api/api';

const ActivitiesPage = ({ data }: any) => {
  const { activities, pics } = data;
  const images = pics.activities;
  const { title, intro, list } = activities;

  return (
    <>
      <Header data={data} />
      <ActivitiesScreen
        title={title}
        intro={intro}
        images={images}
        list={list}
      />
      <Footer data={data} />
    </>
  );
};

export default ActivitiesPage;

export const getStaticProps = async () => {
  const testData: any = await Api.getData();

  return {
    props: {
      data: testData.data,
    },
  };
};
