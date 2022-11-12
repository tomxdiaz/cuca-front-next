import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import htmlHelper from '../../utils/htmlHelper';
import Carousel from '../Carousel/Carousel';

const StyledTitleContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledTitleContainer;
    font-family: ${theme.typography.fontFamily};
    background-color: ${theme.palette.custom_summary_bg_color.main};
    padding-bottom: 20px;
    padding-top: 40px;
    color: ${theme.palette.custom_white.main};
    text-transform: uppercase;
    ${theme.breakpoints.down('sm')} {
      font-size: 10px;
    }
  `;
});

const StyledTitle = styled('h1')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledTitle;
    margin-right: 80px;
    margin-left: 80px;
    font-size: 40px;
    ${theme.breakpoints.down('md')} {
      margin-left: 30px;
      margin-right: 30px;
      font-size: 30px;
    }
    ${theme.breakpoints.down('sm')} {
      margin-left: 20px;
      margin-right: 20px;
    }
    };
  `;
});

const StyledContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledContainer;
    margin-top: 20px;
    color: ${theme.palette.custom_grey().main};
    font-family: ${theme.typography.fontFamily};
    margin-right: 80px;
    margin-left: 80px;
    ${theme.breakpoints.down('md')} {
      margin-left: 30px;
      margin-right: 30px;
    }
    ${theme.breakpoints.down('sm')} {
      margin-left: 20px;
      margin-right: 20px;
    }
    };
  `;
});

const UnitScreen = ({ unit }: any) => {
  const { title, desc } = unit;
  const pics = unit.pics ? unit.pics : [];

  const sanitizedUnitDescription = htmlHelper.sanitizeTheHTML(desc);

  return (
    <>
      <Carousel images={pics} />
      <StyledTitleContainer>
        <Grid item xs={12}>
          <StyledTitle>{title}</StyledTitle>
        </Grid>
      </StyledTitleContainer>
      <StyledContainer>
        <div dangerouslySetInnerHTML={{ __html: sanitizedUnitDescription }} />
      </StyledContainer>
    </>
  );
};

export default UnitScreen;
