import { Button, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import React from 'react';

const StyledListsContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledGridItem;
  display: flex;
  flex-direction: column;
  width: 100%;
  `;
});

const StyledList = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledList;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 80px;
  border-bottom: 1px solid ${theme.palette.custom_grey(0.2).main};
  `;
});

const StyledSubList = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledSubList;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 120px;
  border-bottom: 1px solid ${theme.palette.custom_grey(0.2).main};
  `;
});

const StyledLink = styled(Link)(({ theme }) => ({
  label: 'StyledLink',
  textDecoration: 'none',
}));

// const StyledListItem = styled(ButtonBase)(({ theme }) => ({
//   label: 'StyledListItem',
//   padding: '10px 26px',
//   fontFamily: theme.typography.fontFamily,
//   textDecoration: 'none',
//   textTransform: 'none',
//   color: theme.palette.custom_grey().main,
// }));

const StyledListItem = styled(Button)((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledListItem;
  padding: 4px 16px;
  font-family: theme.typography.fontFamily;
  text-fecoration: 'none';
  text-transform: 'none';
  color: ${theme.palette.custom_grey().main};
  `;
});

const DesktopMenu = (props: any) => {
  const { mainMenu } = props;

  return (
    <>
      <StyledListsContainer>
        <StyledList>
          <StyledLink href={'/'}>
            <StyledListItem>Inicio</StyledListItem>
          </StyledLink>
          <StyledLink href={'/units'}>
            <StyledListItem>Cabañas</StyledListItem>
          </StyledLink>
          <StyledLink href={'/services'}>
            <StyledListItem>Servicios y Equipamiento</StyledListItem>
          </StyledLink>
          <StyledLink href={'/activities'}>
            <StyledListItem>Actividades</StyledListItem>
          </StyledLink>
          <StyledLink href={'/location'}>
            <StyledListItem>Ubicacion</StyledListItem>
          </StyledLink>
          <StyledLink href={'/tariffs'}>
            <StyledListItem>Tarifas</StyledListItem>
          </StyledLink>
        </StyledList>
        <StyledSubList>
          <StyledLink href={'/mono'}>
            <StyledListItem>Monoambiente</StyledListItem>
          </StyledLink>
          <StyledLink href={'/mono_gde'}>
            <StyledListItem>Monoambiente Grande</StyledListItem>
          </StyledLink>
          <StyledLink href={'/cab_4'}>
            <StyledListItem>Cabaña 4 Personas</StyledListItem>
          </StyledLink>
          <StyledLink href={'/cab_5'}>
            <StyledListItem>Cabaña 5 Personas</StyledListItem>
          </StyledLink>
        </StyledSubList>
      </StyledListsContainer>
    </>
  );
};

export default DesktopMenu;
