import { styled } from '@mui/material/styles';
import React from 'react';
import htmlHelper from '../../utils/htmlHelper';
import Link from 'next/link';

const StyledMainContainer = styled('main')((props: { theme?: any }) => {
  const { theme } = props;
  return `
      label: StyledMainContainer;
      color: ${theme.palette.custom_grey().main};
      font-family: ${theme.typography.fontFamily};
      margin-left: 80px;
      margin-right: 80px;
      ${theme.breakpoints.down('md')} {
      margin-left: 20px;
      margin-right: 20px;
      },
    `;
});

const StyledIntroContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntroContainer;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.palette.custom_summary_bg_color.main};
    `;
});

const StyledIntro = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntro;
    margin-left: 80px;
    margin-right: 80px;
    ${theme.breakpoints.down('sm')} {
        margin-left: 20px;
        margin-right: 20px;
        font-size: 10px;
    };
    color: ${theme.palette.custom_white.main};
    text-transform: uppercase;
    `;
});

const StyledIntroText = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntroText;
    `;
});

const StyledSummaryContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledSummaryContainer;
    margin-left: 40px;
    margin-right: 40px;
    ${theme.breakpoints.down('sm')} {
      margin-left: 10px;
      margin-right: 10px;
    };
    `;
});

const LocationScreen = ({ title, intro }: any) => {
  const cleanIntro = htmlHelper.sanitizeTheHTML(intro);
  return (
    <>
      <StyledMainContainer id='location'>
        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2517.905558797514!2d-57.02882758947358!3d-37.33393669205008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959b5c34cd739d43%3A0x59af217f940062cf!2sCaba%C3%B1as%20Cucalambe!5e0!3m2!1ses!2sar!4v1693868262452!5m2!1ses!2sar'
            width='100%'
            height='400'
            style={{ border: 0 }}
            allowFullScreen={true}
          />
        </div>
        <StyledIntroContainer>
          <StyledIntro>
            <StyledIntroText>
              <h1>{title}</h1>
            </StyledIntroText>
          </StyledIntro>
        </StyledIntroContainer>

        <StyledSummaryContainer
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            display: 'flex',
          }}>
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            target='__blank'
            href='https://www.google.com/maps/place/Caba%C3%B1as+Cucalambe/@-37.3342832,-57.0323618,17z/data=!3m1!4b1!4m6!3m5!1s0x959b5c34cd739d43:0x59af217f940062cf!8m2!3d-37.3342875!4d-57.0297869!16s%2Fg%2F11c2knc_bk?entry=ttu'>
            <StyledIntroText>
              Latitud:<b> -37.3342832 </b>
            </StyledIntroText>
            <StyledIntroText>
              Longitud: <b> -57.0323618 </b>
            </StyledIntroText>
          </Link>
        </StyledSummaryContainer>
        <StyledSummaryContainer>
          <StyledIntroText dangerouslySetInnerHTML={{ __html: cleanIntro }} />
        </StyledSummaryContainer>
      </StyledMainContainer>
    </>
  );
};

export default LocationScreen;
