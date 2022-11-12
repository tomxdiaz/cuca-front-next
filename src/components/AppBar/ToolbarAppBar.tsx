import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { Hidden } from '@mui/material';

function ToolbarAppBar(props: any) {
  const { mainMenu, logoSrc } = props;
  return (
    <Toolbar disableGutters={true}>
      <Hidden lgDown={true}>
        <DesktopMenu mainMenu={mainMenu} />
      </Hidden>
      <Hidden lgUp={true}>
        <MobileMenu mainMenu={mainMenu} logoSrc={logoSrc} />
      </Hidden>
    </Toolbar>
  );
}

export default ToolbarAppBar;
