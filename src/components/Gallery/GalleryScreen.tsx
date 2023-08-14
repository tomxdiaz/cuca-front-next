import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import htmlHelper from '../../utils/htmlHelper';
import Carousel from '../Carousel/Carousel';

const StyledContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledContainer;
    margin-left: 80px;
    margin-right: 80px;
    ${theme.breakpoints.down('md')} {
      margin-left: 30px;
      margin-right: 30px;
    };
    ${theme.breakpoints.down('sm')} {
      margin-left: 20px;
      margin-right: 20px;
    };
    margin-bottom: 50px;
    margin-top: 25px;
    font-family: ${theme.typography.fontFamily};
    color: ${theme.palette.custom_grey().main};
  `;
});

const StyledTitleContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledTitleContainer;
    background-color: ${theme.palette.custom_summary_bg_color.main};
    padding-bottom: 20px;
    padding-top: 40px;
    text-transform: uppercase;
    color: ${theme.palette.custom_white.main};
    ${theme.breakpoints.down('sm')} {
      font-size: 12px;
    };
    font-family: ${theme.typography.fontFamily};
  `;
});

const StyledTitle = styled('h1')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledTitle;
    font-size: 40px;
    margin-left: 80px;
    margin-right: 80px;
    ${theme.breakpoints.down('md')} {
      margin-left: 30px;
      margin-right: 30px;
      font-size: 30px;
    };
    ${theme.breakpoints.down('sm')} {
      margin-left: 20px;
      margin-right: 20px;
    };
  `;
});

const GalleryScreen = ({ galleryPics, welcomeDesc }: any) => {
  const sanitizedWelcomeDesc = htmlHelper.sanitizeTheHTML(welcomeDesc);
  return (
    <>
      <Carousel images={galleryPics} />
      <StyledTitleContainer>
        <Grid item xs={12}>
          <StyledTitle>Cabañas</StyledTitle>
        </Grid>
      </StyledTitleContainer>

      <StyledContainer>
        <Grid item xs={12}>
          <div>
            <div dangerouslySetInnerHTML={{ __html: sanitizedWelcomeDesc }} />
          </div>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default GalleryScreen;
