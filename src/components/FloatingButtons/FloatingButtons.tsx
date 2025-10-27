/* eslint-disable @next/next/no-img-element */
import { Paper, styled } from '@mui/material';
import Link from 'next/link';

const _IMG_SRC = process.env.NEXT_PUBLIC_IMG_SRC;

const StyledFloatingButtonsContainer = styled('div')(({ theme }) => ({
  label: 'StyledFloatingButtonsContainer',
  position: 'fixed',
  bottom: '25px',
  right: '25px',
  display: 'flex',
  flexDirection: 'row',
  gap: '25px',
  zIndex: 9999,
}));

const StyledFloatingButton = styled(Paper)(({ theme }) => ({
  label: 'StyledFloatingButton',
  borderRadius: '50%',
  display: 'flex',
  aspectRatio: 1,
  ':hover': {
    transform: 'scale(1.1)',
  },
  transition: 'transform 0.3s ease-in-out',
}));

const StyledFloatingIcon = styled('img')(({ theme }) => ({
  label: 'StyledFloatingIcon',
  height: '55px',
  width: '55px',
}));

const FloatingButtons = () => {
  const wappSource = `${_IMG_SRC}/whatsapp.png`;

  const instaSource = `${_IMG_SRC}/instagram.png`;

  return (
    <StyledFloatingButtonsContainer>
      <StyledFloatingButton elevation={5}>
        <Link href='https://wa.me/5492267523627?text=Hola!%20Quer%C3%ADa%20consultar%20por...%20' target='__blank'>
          <StyledFloatingIcon src={wappSource} alt='whatsapp icon' />
        </Link>
      </StyledFloatingButton>

      <StyledFloatingButton elevation={5}>
        <Link href='https://www.instagram.com/cucalambe.lasgaviotas/' target='__blank'>
          <StyledFloatingIcon src={instaSource} alt='instagram icon' />
        </Link>
      </StyledFloatingButton>
    </StyledFloatingButtonsContainer>
  );
};

export default FloatingButtons;
