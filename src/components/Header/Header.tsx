import React from 'react';
import HeaderScreen from './HeaderScreen';

const Header = ({ data }: any) => {
  const { logoUrl, contact } = data;
  const { phones, email } = contact;

  return (
    <>
      <HeaderScreen logoUrl={logoUrl} email={email} phones={phones} />
    </>
  );
};

export default Header;
