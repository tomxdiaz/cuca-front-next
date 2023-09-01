/* eslint-disable @next/next/no-img-element */
import { Paper, styled } from '@mui/material';
import Link from 'next/link';

const _IMG_SRC = process.env.NEXT_PUBLIC_IMG_SRC;

const StyledWppFloatingButton = styled(Paper)(({ theme }) => ({
  label: 'StyledWppFloatingButton',
  borderRadius: '50%',
  position: 'fixed',
  bottom: '25px',
  right: '25px',
  display: 'flex',
  aspectRatio: 1,
  ':hover': {
    transform: 'scale(1.1)',
  },
  transition: 'transform 0.3s ease-in-out',
}));

const StyledWppFloatingIcon = styled('img')(({ theme }) => ({
  label: 'StyledWppFloatingIcon',
  height: '55px',
  width: '55px',
}));

const WppFloatingButton = () => {
  const wappSource = `${_IMG_SRC}/whatsapp_sm.png`;

  return (
    <StyledWppFloatingButton elevation={5}>
      <Link href='https://wa.me/5492267523627?text=Hola!%20Quer%C3%ADa%20consultar%20por...%20' target='__blank'>
        <StyledWppFloatingIcon src={wappSource} alt='whatsapp icon' />
      </Link>
    </StyledWppFloatingButton>
  );
};

export default WppFloatingButton;
