import { Hidden } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import ToolbarAppBar from '../AppBar/ToolbarAppBar';
import Link from 'next/link';

const StyledHeader = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    color: ${theme.palette.custom_grey().main};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    height: 180px;
    ${theme.breakpoints.down('xl')} {
      height: 160px;
    };
  `;
});

const StyledLogo = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
  height: 100%;
  `;
});

const StyledLogoImg = styled('img')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    height: 100%;
  `;
});

const StyledContact = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: ${theme.typography.fontFamily}
  `;
});

const StyledMenu = styled('nav')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    display: flex;
    align-items: flex-end;
    font-size: 10px;
  `;
});

const StyledPhone = styled('div')`
  label: StyledPhone;
  margin-top: 5px;
`;

const StyledWappIcon = styled('img')`
  label: StyledWappIcon;
  width: 25px;
  vertical-align: bottom;
`;

const StyledLink = styled(Link)(({ theme }) => ({
  label: 'StyledLink',
  textDecoration: 'none',
}));

const HeaderScreen = ({ logoUrl, email, phones }: any) => {
  const _IMG_SRC = process.env.NEXT_PUBLIC_IMG_SRC;
  const logoSource = `${_IMG_SRC}/${logoUrl}`;
  const wappSource = `${_IMG_SRC}/whatsapp.png`;

  return (
    <>
      <StyledHeader>
        <StyledLink style={{ height: '100%' }} href={'/'}>
          <StyledLogo>
            <StyledLogoImg src={logoSource} />
          </StyledLogo>
        </StyledLink>
        <Hidden mdDown={true}>
          <StyledContact>
            <Link
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              href={`https://mail.google.com/mail/?view=cm&source=mailto&to=${email}`}
              target='__blank'>
              <div>
                <span>{email}</span>
              </div>
            </Link>

            {phones?.map((phone: any, i: number) => (
              <StyledPhone key={`phone_${i}`}>
                {phone.showNumber}{' '}
                {phone.type === 'mobile' ? (
                  <Link
                    href={`https://wa.me/${phone.number}?text=Hola%20${phone.name}!%20Quer%C3%ADa%20consultar%20por...%20`}
                    target='__blank'>
                    <StyledWappIcon src={wappSource} />
                  </Link>
                ) : (
                  ''
                )}
              </StyledPhone>
            ))}
          </StyledContact>
        </Hidden>
        <StyledMenu>
          <ToolbarAppBar logoSrc={logoSource} />
        </StyledMenu>
        <div></div>
      </StyledHeader>
    </>
  );
};

export default HeaderScreen;
