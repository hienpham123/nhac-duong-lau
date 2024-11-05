import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { COLORS } from '../../../shared/constants/common';
import SideBar from '../SideBar/SideBar';
import { useLocation } from 'react-router-dom';
import ROUTERS_PATHS from '../../../shared/constants/router-path';
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  return (
    <Box sx={{ backgroundColor: COLORS.SECONDARY }}>
      <div className='container_body'>
        <CssBaseline />
        <Box component="main" sx={{ flexGrow: 10, }}>
          {children}
        </Box>
      </div>
      {[ROUTERS_PATHS.HOME, ROUTERS_PATHS.INFO].includes(location.pathname) && <SideBar />}
    </Box>
  );
};
export default MainLayout;
