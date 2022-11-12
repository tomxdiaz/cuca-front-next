import { Button, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import React, { useState } from 'react';

const StyledListsContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledGridItem;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${theme.typography.fontFamily}
  `;
});

const StyledList = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledList;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: ${theme.typography.fontFamily};
  border-bottom: 1px solid ${theme.palette.custom_grey(0.5).main};
  margin-left: 20px;
  `;
});

const StyledListItem = styled(Button)((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledListItem;
  padding: 5px 24px 5px 24px;
  margin: 0;
  color: ${theme.palette.custom_grey().main};
  font-family: ${theme.typography.fontFamily};
  font-size: 18px;
  text-decoration: none;
  `;
});

const StyledText = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledText;
  color: ${theme.palette.custom_grey().main};
  text-decoration: none;
  `;
});

const StyledDrawer = styled(Drawer)((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledDrawer;
  color: ${theme.palette.custom_grey().main};
  text-decoration: none;
  `;
});

const StyledDrawerList = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledDrawerList;
  width: 100%;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${theme.typography.fontFamily};
  `;
});

const StyledDrawerListItem = styled(Button)((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledDrawerListItem;
  display: flex;
  text-decoration: none;
  margin: 3px;
  color: ${theme.palette.custom_grey().main};
  justify-content: center;
  border-bottom: 1px solid ${theme.palette.custom_grey(0.2).main};
  `;
});

const StyledDrawerListSeparator = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledDrawerListSeparator;
  display: flex;
  margin: 20px 3px 10px 3px;
  text-transform: uppercase;
  color: ${theme.palette.custom_grey().main};
  font-weight: 600;
  justify-content: center;
  `;
});

const StyledLogo = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledLogo;
  margin: 30px 30px 5px 30px;
  `;
});

const StyledLogoImg = styled('img')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    width: 170px;
  `;
});

const StyledLink = styled(Link)((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledLink;
  color: ${theme.palette.custom_grey().main};
  text-decoration: none;
  `;
});

const MobileMenu = ({ mainMenu, logoSrc }: any) => {
  const [left, setLeft] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setLeft(open);
    };

  return (
    <>
      <StyledListsContainer>
        <StyledList>
          <StyledListItem>
            <StyledText onClick={toggleDrawer(true)}>Menu</StyledText>
          </StyledListItem>
        </StyledList>
      </StyledListsContainer>
      <StyledDrawer anchor={'left'} open={left} onClose={toggleDrawer(false)}>
        <StyledLogo>
          <StyledLogoImg src={logoSrc} />
        </StyledLogo>
        <StyledDrawerList>
          <StyledDrawerListItem>
            <StyledLink href={'/'}>Inicio</StyledLink>
          </StyledDrawerListItem>
          <StyledDrawerListItem>
            <StyledLink href={'/units'}>Cabañas</StyledLink>
          </StyledDrawerListItem>
          <StyledDrawerListItem>
            <StyledLink href={'/services'}>Servicios y Equipamiento</StyledLink>
          </StyledDrawerListItem>
          <StyledDrawerListItem>
            <StyledLink href={'/activities'}>Actividades</StyledLink>
          </StyledDrawerListItem>
          <StyledDrawerListItem>
            <StyledLink href={'/location'}>Ubicacion</StyledLink>
          </StyledDrawerListItem>
          <StyledDrawerListItem>
            <StyledLink href={'/tariffs'}>Tarifas</StyledLink>
          </StyledDrawerListItem>
          <StyledDrawerListSeparator>Unidades</StyledDrawerListSeparator>
          <StyledDrawerListItem>
            <StyledLink href={'/mono'}>Monoambiente</StyledLink>
          </StyledDrawerListItem>
          <StyledDrawerListItem>
            <StyledLink href={'/mono_gde'}>Monoambiente Grande</StyledLink>
          </StyledDrawerListItem>
          <StyledDrawerListItem>
            <StyledLink href={'/cab_4'}>Cabaña 4 Personas</StyledLink>
          </StyledDrawerListItem>
          <StyledDrawerListItem>
            <StyledLink href={'/cab_5'}>Cabaña 5 Personas</StyledLink>
          </StyledDrawerListItem>
        </StyledDrawerList>
      </StyledDrawer>
    </>
  );
};

export default MobileMenu;
