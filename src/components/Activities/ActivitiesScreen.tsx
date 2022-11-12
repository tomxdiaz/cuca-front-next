import { Grid } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import React from 'react';
import BootstrapCarousel from '../Carousel/Carousel';

const StyledMainContainer = styled('main')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledMainContainer;
    color: ${theme.palette.custom_grey().main};
    font-family: ${theme.typography.fontFamily};
  `;
});

const StyledSummaryContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledSummaryContainer;
    margin-left: 80px;
    margin-right: 80px;
    margin-top: 20px;
    ${theme.breakpoints.down('sm')} {
      margin-left: 20px;
      margin-right: 20px;
    };

  `;
});

const StyledIntroContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntroContainer;
    minHeight: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.palette.custom_summary_bg_color.main};
    color: ${theme.palette.custom_white.main};

  `;
});

const StyledIntro = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntro;
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 80px;
    margin-right: 80px;
    ${theme.breakpoints.down('sm')} {
      margin-left: 20px;
      margin-right: 20px;
    };

`;
});

const StyledIntroText = styled('h1')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntroText;
    margin-top: 15px;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0;
`;
});

const ActivitiesScreen = ({ title, intro, images, list }: any) => {
  return (
    <>
      <StyledMainContainer>
        <Grid item xs={12}>
          <BootstrapCarousel images={images} />
          <StyledIntroContainer>
            <StyledIntro>
              <StyledIntroText>{intro}</StyledIntroText>
            </StyledIntro>
          </StyledIntroContainer>
          <StyledSummaryContainer>
            <Grid item xs={12} style={{ margin: '40px 0px 20px 0px' }}>
              <h1>{title}</h1>
            </Grid>
            <Grid item xs={12}>
              <ul>
                {list.map((item: any, i: number) => (
                  <li key={i}>{item.text}</li>
                ))}
              </ul>
            </Grid>
          </StyledSummaryContainer>
        </Grid>
      </StyledMainContainer>
    </>
  );
};

export default ActivitiesScreen;
