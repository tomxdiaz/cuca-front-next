import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledIntroContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntroContainer;
    color: ${theme.palette.custom_white.main};
    font-family: ${theme.typography.fontFamily};
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.palette.custom_summary_bg_color.main};
    padding-top: 40px;
    ${theme.breakpoints.down('sm')} {
      font-size: 12px;
    };

  `;
});

const StyledGrid = styled(Grid)((props: { theme?: any }) => {
  const { theme } = props;
  return `
  label: StyledGrid;
  display: flex;
  ${theme.breakpoints.down('md')} {
    flex-direction: column;
  };
  `;
});

const StyledIntro = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntro;
    margin-left: 80px;
    margin-right:80px;
    ${theme.breakpoints.down('sm')} {
      margin-left: 20px;
      margin-right: 20px;
    };

  `;
});

// const StyledMainContainer = styled("div")((props: { theme?: any }) => {
//   const { theme } = props;
//   return `
//     label: StyledMainContainer;
//     display: flex;
//     flex-direction: column;
//   `;
// });

const StyledIntroText = styled('p')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledIntroText;
    margin-top: 15px;

  `;
});

const StyledContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledContainer;
    color: ${theme.palette.custom_grey().main};
    font-family: ${theme.typography.fontFamily};
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
    flex-direction: row;
    width: 100%;
    ${theme.breakpoints.down('sm')} {
      padding-left: 20px;
      padding-right: 20px;
    };
  `;
});

const StyledTextContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledTextContainer;
  `;
});

const StyledGridItem = styled(Grid)((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledGridItem;
  `;
});

const StyledEquipTitle = styled('h2')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledEquipTitle;
  `;
});

const StyledListItem = styled('li')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: StyledListItem;
  `;
});

const ServicesScreen = ({ data }: any) => {
  const { services, equipment } = data;
  const servicesIntro = services.intro;
  const servicesTitle = services.title;
  const servicesList = services.list;
  const equipmentTitle = equipment.title;
  const equipmentList = equipment.list;

  return (
    <>
      <StyledIntroContainer>
        <StyledIntro>
          <h1>SERVICIOS Y EQUIPAMIENTO</h1>
          <StyledIntroText>{servicesIntro}</StyledIntroText>
        </StyledIntro>
      </StyledIntroContainer>
      <StyledContainer>
        <StyledGrid>
          <StyledGridItem item md={6} xs={12}>
            <h2>{servicesTitle}</h2>
            <StyledTextContainer>
              {servicesList.map((service: any, i: number) => (
                <li key={i}>{service.text}</li>
              ))}
            </StyledTextContainer>
            <h2 style={{ maxWidth: '600px' }}>
              Servicios condicionados al protocolo sanitario vigente al momento
              de la estadia
            </h2>
            <StyledTextContainer>
              <li>Pan y facturas para el desayuno</li>
              <li>Ropa blanca (Toallas y Sabanas)</li>
            </StyledTextContainer>
          </StyledGridItem>
          <StyledGridItem item md={6} xs={12}>
            <StyledEquipTitle>{equipmentTitle}</StyledEquipTitle>
            <StyledTextContainer>
              {equipmentList.map((equipment: any, i: number) => (
                <StyledListItem key={i}>{equipment.text}</StyledListItem>
              ))}
            </StyledTextContainer>
          </StyledGridItem>
        </StyledGrid>
      </StyledContainer>
    </>
  );
};

export default ServicesScreen;
