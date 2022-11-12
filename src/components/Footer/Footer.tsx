import React from "react";
import FooterScreen from "./FooterScreen";

const Footer = ({ data }: any) => {
  const { contact } = data;

  return (
    <>
      <FooterScreen
        summary={contact.summary}
        phones={contact.phones}
        email={contact.email}
        facebook={contact.facebook}
      />
    </>
  );
};
export default Footer;
