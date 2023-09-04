import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

const StyledMainContainer = styled('main')((props: { theme?: any }) => {
  const { theme } = props;
  return `
      label: StyledMainContainer;
      color: ${theme.palette.custom_grey().main};
      font-family: ${theme.typography.fontFamily};
    `;
});

const StyledIntroContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntroContainer;
    height: 100px;
    width: 100%;
    background-color: ${theme.palette.custom_summary_bg_color.main}
    `;
});

const StyledIntroText = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntroText;
    margin-left: 80px;
    margin-right: 80px;
    color: ${theme.palette.custom_white.main};
    text-transform: uppercase;
    ${theme.breakpoints.down('sm')} {
        margin-left: 20px;
        margin-right: 20px;
    }
`;
});

const StyledContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledContainer;
    margin-left: 80px;
    margin-right: 80px;
    width: 100%;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
    ${theme.breakpoints.down('sm')} {
    margin-left: 40px;
    margin-right: 40px;
    font-size: 16px;
    }
`;
});

const StyledHomeImageContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
      label: StyledHomeImageContainer;
      height: 300px;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 30% 30%;
    }
  `;
});

const TariffsScreen = (props: any) => {
  const { tariffsTitle, tariffsContent, tariffsMainPic } = props;

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' });

  const _IMG_SRC = isTabletOrMobile ? process.env.NEXT_PUBLIC_IMG_SRC + '/mobile' : process.env.NEXT_PUBLIC_IMG_SRC + '/desktop';

  const mainImgUrl = `${_IMG_SRC}/${tariffsMainPic}`;

  return (
    <>
      <StyledMainContainer>
        <Grid container>
          <StyledHomeImageContainer style={{ backgroundImage: `url(${mainImgUrl})` }} />
          <StyledIntroContainer>
            <div>
              <StyledIntroText>
                <h1>{tariffsTitle}</h1>
              </StyledIntroText>
            </div>
          </StyledIntroContainer>
          <StyledContainer>
            <div>
              <Grid item xs={12}>
                <p>{tariffsContent}</p>
              </Grid>
            </div>
          </StyledContainer>
        </Grid>
      </StyledMainContainer>
    </>
  );
};

export default TariffsScreen;
