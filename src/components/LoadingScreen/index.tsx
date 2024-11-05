import React from 'react';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetLoadingScreenState } from '../redux/store/loadingScreen';

const LoadingScreen = () => {
  const { isLoading } = useGetLoadingScreenState();
  return (
    <Backdrop
      key={isLoading + 2}
      transitionDuration={0}
      sx={{
        color: '#ffffff',
        zIndex: (theme) => theme.zIndex.drawer + 10000
        // backgroundColor: COLORS.BACKGROUND_LOADING,
      }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingScreen;
