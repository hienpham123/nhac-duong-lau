import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { COLORS } from '../../../shared/constants/common';
import SideBar from '../SideBar/SideBar';
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: COLORS.SECONDARY }}>
      <CssBaseline />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 10, p: 3, pt: 10 }}>
        {children}
      </Box>
    </Box>
  );
};
export default MainLayout;
