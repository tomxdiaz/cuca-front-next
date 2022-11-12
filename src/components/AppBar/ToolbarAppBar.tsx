import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import Hidden from "@material-ui/core/Hidden";

function ToolbarAppBar(props: any) {
  const { mainMenu, logoSrc } = props;
  return (
    <Toolbar disableGutters={true}>
      <Hidden mdDown={true}>
        <DesktopMenu mainMenu={mainMenu} />
      </Hidden>
      <Hidden mdUp={true}>
        <MobileMenu mainMenu={mainMenu} logoSrc={logoSrc} />
      </Hidden>
    </Toolbar>
  );
}

export default ToolbarAppBar;
