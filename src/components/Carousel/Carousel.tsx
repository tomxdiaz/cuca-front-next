import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { styled } from '@mui/material/styles';

const StyledCarouselContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledCarouselContainer;
    display: flex;
    height: 76vh;
    ${theme.breakpoints.down('md')} {
      height: 47.5vh;
    };
    ${theme.breakpoints.down('sm')} {
      height: 37.5vh;
    };

`;
});
const StyledCarousel = styled(Carousel)((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledCarousel;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    `;
});

const StyledCarouselItem = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledCarouselItem;
    height: 76vh;
    ${theme.breakpoints.down('md')} {
      height: 47.5vh;
    };
    ${theme.breakpoints.down('sm')} {
      height: 37.5vh;
    };
    width: 100%;
`;
});

const StyledImg = styled('img')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledImg;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
});

const BootstrapCarousel = ({ images }: any) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' });

  const _IMG_SRC = isTabletOrMobile ? process.env.NEXT_PUBLIC_IMG_SRC + '/mobile' : process.env.NEXT_PUBLIC_IMG_SRC + '/desktop';
  return (
    <>
      <StyledCarouselContainer>
        <StyledCarousel fade interval={3000} pause={false}>
          {images.map((image: any, i: number) => {
            return (
              <StyledCarouselItem className={'carousel-item'} key={i}>
                <StyledImg className='d-block w-100' src={`${_IMG_SRC}/${image}`} />
              </StyledCarouselItem>
            );
          })}
        </StyledCarousel>
      </StyledCarouselContainer>
    </>
  );
};

export default BootstrapCarousel;
