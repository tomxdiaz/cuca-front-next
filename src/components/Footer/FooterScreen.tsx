import PhoneIcon from '@material-ui/icons/Phone';
import MobileIcon from '@material-ui/icons/StayCurrentPortrait';
import EmailIcon from '@material-ui/icons/EmailOutlined';
import { styled } from '@mui/material/styles';
import { Hidden } from '@mui/material';

const MainContainer = styled('footer')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    label: MainContainer;
    margin-top: 50px;
    margin-left: 80px;
      margin-right: 80px;
    ${theme.breakpoints.down('md')} {
      margin-left: 40px;
      margin-right: 40px;
    };
    ${theme.breakpoints.down('sm')} {
      margin-left: 20px;
      margin-right: 20px;
    };
    color: ${theme.palette.custom_grey().main};
    font-family: ${theme.typography.fontFamily}
  `;
});

const ContactContainer = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `;
});

const Contact = styled('ul')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    margin-right: 20px;
    padding-left: 0px;
    margin-left: 0px;
    text-align: left;
    list-style-type: none;
    margin-bottom: 0;
  `;
});

const ListItem = styled('li')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    margin-bottom: 10px;
  `;
});

const StyledMobileIcon = styled(MobileIcon)((props: { theme?: any }) => {
  const { theme } = props;
  return `
    margin-bottom: -5px;
    margin-right: 10px;
    color: ${theme.palette.custom_grey().main};
    text-decoration: none;
    border: none;
  `;
});

const StyledPhoneIcon = styled(PhoneIcon)((props: { theme?: any }) => {
  const { theme } = props;
  return `
    margin-bottom: -5px;
    margin-right: 10px;
    color: ${theme.palette.custom_grey().main};
    text-decoration: none;
    border: none;
  `;
});

const StyledEmailIcon = styled(EmailIcon)((props: { theme?: any }) => {
  const { theme } = props;
  return `
    margin-bottom: -5px;
    margin-right: 10px;
    color: ${theme.palette.custom_grey().main};
    text-decoration: none;
    border: none;
  `;
});

const ContactEmail = styled('div')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    margin-bottom: 40px;
  `;
});

const EmailLink = styled('a')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    font-size: 16px;
    color: ${theme.palette.custom_grey().main};
    text-decoration: none;
    border: none;
  `;
});

const WappIcon = styled('img')((props: { theme?: any }) => {
  const { theme } = props;
  return `
    width: 25px;
    vertical-align: bottom;
    margin-left: 5px;`;
});

const FooterScreen = (props: any) => {
  const { phones, email, summary, facebook } = props;
  const _IMG_SRC = process.env.NEXT_PUBLIC_IMG_SRC;
  const wappSource = `${_IMG_SRC}/whatsapp_sm.png`;

  return (
    <>
      <MainContainer>
        <hr />
        <ContactContainer>
          <p>{summary}</p>
          <Contact>
            {phones.map((phone: any, i: number) => {
              return (
                <ListItem key={i}>
                  <a
                    href='#phone'
                    title={phone.linkTitle}
                    className={
                      phone.type === 'mobile' ? 'Footer-mobile' : 'Footer-phone'
                    }
                  >
                    {phone.type === 'mobile' ? (
                      <StyledMobileIcon className='Footer-icon' />
                    ) : (
                      <StyledPhoneIcon className='Footer-icon' />
                    )}
                  </a>
                  {phone.showNumber}
                  {phone.type === 'mobile' ? (
                    <WappIcon src={wappSource} className='Footer-wapp-icon' />
                  ) : (
                    ''
                  )}
                </ListItem>
              );
            })}
            <ContactEmail className='Footer-contactEmail'>
              <EmailLink href={`#email`} className='Footer-emailLink'>
                <Hidden smDown={true}>
                  <StyledEmailIcon className='Footer-icon' />
                </Hidden>
                <span>{email}</span>
              </EmailLink>
            </ContactEmail>
          </Contact>
        </ContactContainer>
      </MainContainer>
    </>
  );
};

export default FooterScreen;
