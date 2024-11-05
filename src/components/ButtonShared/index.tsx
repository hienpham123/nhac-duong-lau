import React, { ReactNode } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { COLORS } from '../../shared/constants/common';

type TypeButton = 'submit' | 'reset' | 'button';
type ColorType = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
interface ButtonSharedPropsModel {
  className?: string;
  loading: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  label: string;
  type?: TypeButton;
  onClick?: (parameters: any) => void;
  color?: ColorType;
  sx?: any;
  fullWidth?: boolean;
}
const ButtonShared = (props: ButtonSharedPropsModel) => {
  const { loading, startIcon, label, sx, ...rest } = props;
  return (
    <LoadingButton
      loading={loading}
      loadingPosition="start"
      startIcon={startIcon}
      variant="outlined"
      size="large"
      sx={{
        textTransform: 'capitalize',
        color: COLORS.COLOR_BUTTON,
        borderRadius: 2,
        ':hover': {
          boxShadow:
            'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px'
        },
        ...sx
      }}
      {...rest}
    >
      {label}
    </LoadingButton>
  );
};
export default ButtonShared;
