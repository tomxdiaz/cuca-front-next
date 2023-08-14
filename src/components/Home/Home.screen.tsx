import React from 'react';
import htmlHelper from '../../utils/htmlHelper';
import { useMediaQuery } from 'react-responsive';
import { styled } from '@mui/material/styles';
import { CldVideoPlayer } from 'next-cloudinary';
import { Grid } from '@mui/material';

const StyledMainContainer = styled('main')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    color: ${theme.palette.custom_grey().main};
  `;
});

const StyledSummaryContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    background-color: ${theme.palette.custom_summary_bg_color.main};
    padding-bottom: 20px;
    padding-top: 10px;
    color: ${theme.palette.custom_white.main};
    `;
});

const StyledSummary = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    margin-left: 20px;
    margin-right: 20px;
    ${theme.breakpoints.up('sm')} {
      margin-left: 80px;
      margin-right: 80px;
    };
    font-family: ${theme.typography.fontFamily};
  `;
});

const StyledMainBannerContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    display: flex;
    width: 100%;
    aspect-ratio: 21 / 9;
    max-height: 70vh;
    ${theme.breakpoints.down('lg')} {
      aspect-ratio: 16 / 9;
    };
    ${theme.breakpoints.down('md')} {
      aspect-ratio: 12 / 9;
    };
  `;
});

const HomeScreen = ({ summary, homeImages }: any) => {
  const cleanSummary = htmlHelper.sanitizeTheHTML(summary);

  return (
    <>
      <StyledMainContainer id='home'>
        <StyledMainBannerContainer>
          <video
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            controls={false}
            autoPlay
            muted
            loop
            src='https://res.cloudinary.com/damu0eilu/video/upload/v1691967124/cucalambe/videos/parque.mp4'
          />
        </StyledMainBannerContainer>

        <StyledSummaryContainer>
          <Grid item xs={12}>
            <StyledSummary dangerouslySetInnerHTML={{ __html: cleanSummary }} />
          </Grid>
        </StyledSummaryContainer>
      </StyledMainContainer>
    </>
  );
};

export default HomeScreen;
