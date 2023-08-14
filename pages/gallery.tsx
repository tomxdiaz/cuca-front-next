import React from 'react';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import GalleryScreen from '../src/components/Gallery/GalleryScreen';
import Api from '../src/services/api/api';

const GalleryPage = ({ data }: any) => {
  const galleryPics = data.pics.gallery;
  const { welcomeDesc } = data;

  return (
    <>
      <Header data={data} />
      <GalleryScreen galleryPics={galleryPics} welcomeDesc={welcomeDesc} />
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

export default GalleryPage;
