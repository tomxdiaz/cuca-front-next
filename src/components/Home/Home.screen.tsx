import React from 'react';
import htmlHelper from '../../utils/htmlHelper';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Head from 'next/head';

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

const ReviewsContainer = styled('div')(({ theme }) => ({
  label: 'ReviewsContainer',
  margin: '0px 40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ReviewsTitle = styled('h2')(({ theme }) => ({
  label: 'ReviewsTitle',
  fontFamily: theme.typography.fontFamily,
  fontWeight: '700',
  fontSize: '40px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
  },
}));

const HomeScreen = ({ summary, homeImages }: any) => {
  const cleanSummary = htmlHelper.sanitizeTheHTML(summary);

  const css = `
    .elfsight-app-f695f2ba-f02a-4c72-b1f7-75879dcb7b19::before a {
        display: none !important;
    }
    es-review-background-container {
      display: none !important;
    }
`;

  return (
    <>
      <Head>
        <style>{css}</style>
      </Head>
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
        <ReviewsContainer>
          <ReviewsTitle>Nuestras Reseñas!</ReviewsTitle>
          <script src='https://static.elfsight.com/platform/platform.js' data-use-service-core defer></script>
          <div className='elfsight-app-f695f2ba-f02a-4c72-b1f7-75879dcb7b19'></div>
        </ReviewsContainer>
      </StyledMainContainer>
    </>
  );
};

export default HomeScreen;
