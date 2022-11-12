import { styled } from "@material-ui/core";
import React from "react";
import htmlHelper from "../../utils/htmlHelper";

const StyledMainContainer = styled("main")((props: { theme?: any }) => {
  const { theme } = props;
  return `
      label: StyledMainContainer;
      color: ${theme.palette.custom_grey().main};
      font-family: ${theme.typography.fontFamily};
      margin-left: 80px;
      margin-right: 80px;
      ${theme.breakpoints.down("sm")} {
        marginLeft: 0;
        marginRight: 0;
      },
    `;
});

const StyledIntroContainer = styled("div")((props: { theme?: any }) => {
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

const StyledIntro = styled("div")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntro;
    margin-left: 80px;
    margin-right: 80px;
    ${theme.breakpoints.down("sm")} {
        margin-left: 20px;
        margin-right: 20px;
        font-size: 10px;
    };
    color: ${theme.palette.custom_white.main};
    text-transform: uppercase;
    `;
});

const StyledIntroText = styled("div")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntroText;
    margin-top: 15px;  
    `;
});

const StyledSummaryContainer = styled("div")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledSummaryContainer;
    margin-left: 80px;
    margin-right: 80px;
    ${theme.breakpoints.down("sm")} {
      margin-left: 20px;
      margin-right: 20px;
    };
    `;
});

const LocationScreen = ({ title, intro }: any) => {
  const cleanIntro = htmlHelper.sanitizeTheHTML(intro);
  return (
    <>
      <StyledMainContainer id="location">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1586.1720185495783!2d-57.03113634190546!3d-37.3343629949605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIwJzAzLjciUyA1N8KwMDEnNDguMSJX!5e0!3m2!1sen!2sau!4v1478395366017"
            width="100%"
            height="300"
            frameBorder={0}
            allowFullScreen={true}
          />
        </div>
        <StyledIntroContainer>
          <StyledIntro>
            <StyledIntroText>
              <h1>Ubicacion</h1>
            </StyledIntroText>
          </StyledIntro>
        </StyledIntroContainer>
        <StyledSummaryContainer>
          <StyledIntroText dangerouslySetInnerHTML={{ __html: cleanIntro }} />
        </StyledSummaryContainer>
      </StyledMainContainer>
    </>
  );
};

export default LocationScreen;
