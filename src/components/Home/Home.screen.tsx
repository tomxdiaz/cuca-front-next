import React from 'react';
import htmlHelper from '../../utils/htmlHelper';
import { Grid } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';
import { styled } from '@mui/material/styles';

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
    padding-top: 40px;
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

const StyledMainImageContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    width: 100%;
    height: 76vh;
    ${theme.breakpoints.down('sm')} {
      height: 37.5vh;
    };
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  `;
});

const HomeScreen = ({ summary, homeImages }: any) => {
  const cleanSummary = htmlHelper.sanitizeTheHTML(summary);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' });

  const _IMG_SRC = isTabletOrMobile
    ? process.env.NEXT_PUBLIC_IMG_SRC + '/mobile'
    : process.env.NEXT_PUBLIC_IMG_SRC + '/desktop';

  const mainImgUrl = `${_IMG_SRC}/${homeImages[0]}`;

  return (
    <>
      <StyledMainContainer id='home'>
        <StyledMainImageContainer
          style={{ backgroundImage: `url(${mainImgUrl})` }}
        />
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
