import { Box, Container } from '@mui/material';
import React, { ReactNode } from 'react';

type HeaderType = {
  children: ReactNode;
};
const headerHeight = 100;

const Header = ({ children }: HeaderType) => {
  return (
    <Box sx={{ bgcolor: '#F2F2F2', height: `${headerHeight}px` }}>
      <Container maxWidth="sm">{children}</Container>
    </Box>
  );
};

export default Header;
