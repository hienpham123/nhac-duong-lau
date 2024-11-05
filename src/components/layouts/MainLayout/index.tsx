import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { COLORS } from '../../../shared/constants/common';
import SideBar from '../SideBar/SideBar';
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box sx={{backgroundColor: COLORS.SECONDARY }}>
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 10, }}>
        {children}
      </Box>
      <SideBar />
    </Box>
  );
};
export default MainLayout;
