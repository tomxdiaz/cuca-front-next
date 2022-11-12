import { Grid, styled } from "@material-ui/core";
import React from "react";
import htmlHelper from "../../utils/htmlHelper";
import Carousel from "../Carousel/Carousel";

const StyledSummaryContainer = styled("div")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledSummaryContainer;
    font-family: ${theme.typography.fontFamily};
    background-color: ${theme.palette.custom_summary_bg_color.main};
    padding-bottom: 20px;
    padding-top: 40px;
    color: ${theme.palette.custom_white.main};
    text-transform: uppercase;
    ${theme.breakpoints.down("sm")} {
      font-size: 10px;
    }
  `;
});

const StyledSummary = styled("h1")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledSummary;
    margin-right: 80px;
    margin-left: 80px;
    ${theme.breakpoints.down("sm")} {
      margin-left: 20px;
      margin-right: 20px;
    }
    };
  `;
});

const StyledContainer = styled("div")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledContainer;
    margin-top: 20px;
    margin-right: 0px;
    margin-left: 30px;
    color: ${theme.palette.custom_grey().main};
    font-family: ${theme.typography.fontFamily};
    ${theme.breakpoints.up("sm")} {
      margin-left: 80px;
      margin-right: 80px;
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
      <StyledSummaryContainer>
        <Grid item xs={12}>
          <StyledSummary>{title}</StyledSummary>
        </Grid>
      </StyledSummaryContainer>
      <StyledContainer>
        <div dangerouslySetInnerHTML={{ __html: sanitizedUnitDescription }} />
      </StyledContainer>
    </>
  );
};

export default UnitScreen;
