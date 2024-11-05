import React from 'react';
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography
} from '@mui/material';
import { ConfirmationModalState, useGetConfirmationModalState, useSetConfirmModalState } from '../redux/store/confirmationModal';
import { COLORS } from '../../shared/constants/common';
import ButtonShared from '../ButtonShared';
import { Close } from '@mui/icons-material';

const ConfirmDialog = () => {

  const { title, onConfirm, backgroundColor, message }: ConfirmationModalState = useGetConfirmationModalState();
  const { closeConfirmModal } = useSetConfirmModalState();

  return (
    <Dialog open={Boolean(onConfirm)} onClose={closeConfirmModal} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          backgroundColor: backgroundColor,
          color: '#ffffff'
        }}
      >{title}</DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={closeConfirmModal}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>
      <DialogActions>
        {/* <Button color="primary" variant="contained" onClick={close}>
          Cancel
        </Button> */}
        <ButtonShared
          loading={false}
          label={'Xác nhận'}
          sx={{
            bgcolor: `${COLORS.PRIMARY} !important`,
          }}
          onClick={() => {
            if (onConfirm) {
              onConfirm();
            }
            closeConfirmModal();
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
