import React from "react";
import HeaderScreen from "./HeaderScreen";

const Header = (props: any) => {
  const { logoUrl, contact } = props.data;
  const phones = contact.phones;
  const email = contact.email;
  return (
    <>
      <HeaderScreen logoUrl={logoUrl} email={email} phones={phones} />
    </>
  );
};

export default Header;
