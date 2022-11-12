import { Button, Link } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import React from 'react';

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
  label: StyledGridItem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 80px;
  font-family: ${theme.typography.fontFamily};
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

  font-family: ${theme.typography.fontFamily};
  border-bottom: 1px solid ${theme.palette.custom_grey(0.2).main};
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
  font-size: 12.5px;
  text-decoration: none;
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

const DesktopMenu = (props: any) => {
  const { mainMenu } = props;

  return (
    <>
      <StyledListsContainer>
        <StyledList>
          <StyledListItem>
            <StyledLink href={'/'}>Inicio</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href={'/units'}>Cabañas</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href={'/services'}>Servicios y Equipamiento</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href={'/activities'}>Actividades</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href={'/location'}>Ubicacion</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href={'/tariffs'}>Tarifas</StyledLink>
          </StyledListItem>
        </StyledList>
        <StyledSubList>
          <StyledListItem>
            <StyledLink href={'/mono'}>Monoambiente</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href={'/mono_gde'}>Monoambiente Grande</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href={'/cab_4'}>Cabaña 4 Personas</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href={'/cab_5'}>Cabaña 5 Personas</StyledLink>
          </StyledListItem>
        </StyledSubList>
      </StyledListsContainer>
    </>
  );
};

export default DesktopMenu;
