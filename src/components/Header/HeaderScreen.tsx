import { Hidden, styled } from "@material-ui/core";
import React, { useState } from "react";
import ToolbarAppBar from "../AppBar/ToolbarAppBar";

const StyledHeader = styled("div")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    color: theme.palette.custom_grey().main;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
  `;
});

const StyledLogo = styled("div")((props: { theme?: any }) => {
  const { theme } = props;
  return {};
});

const StyledLogoImg = styled("img")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    width: 100px;
    ${theme.breakpoints.up("sm")} {
      width: 170px;
    };
  `;
});

const StyledContact = styled("div")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: ${theme.typography.fontFamily}
  `;
});

const StyledMenu = styled("nav")((props: { theme?: any }) => {
  const { theme } = props;
  return `
    display: flex;
    align-items: flex-end;
    font-size: 10px;
  `;
});

const StyledPhone = styled("div")`
  label: StyledPhone;
  margin-top: 5px;
`;

const StyledWappIcon = styled("img")`
  label: StyledWappIcon;
  width: 25px;
  vertical-align: bottom;
`;

const HeaderScreen = (props: any) => {
  const { logoUrl, email, phones } = props;
  const _IMG_SRC = process.env.NEXT_PUBLIC_IMG_SRC;
  const logoSrc = `${_IMG_SRC}/${logoUrl}`;
  const wappSource = `${_IMG_SRC}/whatsapp_sm.png`;

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleMenuClick = (event: any) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

  // const appbarItemClicked = () => {
  //   console.log("appbarItemClicked");
  // };

  return (
    <>
      <StyledHeader>
        <StyledLogo>
          <StyledLogoImg src={logoSrc} />
        </StyledLogo>
        {/* <div className={classes.rightContainer}> */}
        <Hidden lgDown={true}>
          <StyledContact>
            <div>{email}</div>
            {phones?.map((phone: any, i: number) => (
              <StyledPhone key={`phone_${i}`}>
                {phone.showNumber}{" "}
                {phone.type === "mobile" ? (
                  <StyledWappIcon src={wappSource} />
                ) : (
                  ""
                )}
              </StyledPhone>
            ))}
          </StyledContact>
        </Hidden>
        <StyledMenu>
          <ToolbarAppBar
            logoSrc={logoSrc}
            // handleMenuClick={handleMenuClick}
            // appbarItemClicked={appbarItemClicked}
          />
          {/* <ButtonAppBar mainMenu={mainMenu} /> */}
        </StyledMenu>
        <div className="facebook">
          <a href="#po" target="_blank" rel="noopener noreferrer">
            {/* <FacebookIcon /> */}
          </a>
        </div>
        {/* </div> */}
      </StyledHeader>
    </>
  );
};

export default HeaderScreen;
