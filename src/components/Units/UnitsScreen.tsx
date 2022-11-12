import { Grid, styled } from "@material-ui/core";
import React from "react";
import htmlHelper from "../../utils/htmlHelper";
import Carousel from "../Carousel/Carousel";

const StyledContainer = styled("div")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledContainer;
    margin-left: 80px;
    margin-right: 80px;
    ${theme.breakpoints.down("sm")} {
      margin-left: 30px;
      margin-right: 20px;
    };
    margin-bottom: 50px;
    margin-top: 25px;
    font-family: ${theme.typography.fontFamily};
    color: ${theme.palette.custom_grey().main};
  `;
});

const StyledSummaryContainer = styled("div")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledSummaryContainer;
    background-color: ${theme.palette.custom_summary_bg_color.main};
    padding-bottom: 20px;
    padding-top: 40px;
    text-transform: uppercase;
    color: ${theme.palette.custom_white.main};
    ${theme.breakpoints.down("sm")} {
      font-size: 12px;
    };
    font-family: ${theme.typography.fontFamily};
  `;
});

const StyledSummary = styled("h1")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledSummary;
    margin-left: 20px;
    margin-right: 20px;
    ${theme.breakpoints.up("sm")} {
      margin-left: 80px;
      margin-right: 80px;
    };
  `;
});

const UnitsScreen = ({ unitsPics, welcomeDesc }: any) => {
  const sanitizedWelcomeDesc = htmlHelper.sanitizeTheHTML(welcomeDesc);
  return (
    <>
      <Carousel images={unitsPics} />
      <StyledSummaryContainer>
        <Grid item xs={12}>
          <StyledSummary>Cabañas</StyledSummary>
        </Grid>
      </StyledSummaryContainer>

      <StyledContainer>
        <Grid item xs={12}>
          <div /*className={classes.textContainer}*/>
            <div dangerouslySetInnerHTML={{ __html: sanitizedWelcomeDesc }} />
          </div>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default UnitsScreen;
