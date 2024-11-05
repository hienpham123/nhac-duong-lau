import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import REDUX_SLICE_NAMES from '../../../../shared/constants/redux-slice-names';

export interface ConfirmationModalState {
  title: string;
  onConfirm: (() => void) | undefined;
  backgroundColor: string;
  message: string;
}

const initialState: ConfirmationModalState = {
  title: '',
  onConfirm: undefined,
  backgroundColor: "#ffffff",
  message: "",
};

export const confirmationModalSlice = createSlice({
  name: REDUX_SLICE_NAMES.CONFIRM_MODAL,
  initialState,
  reducers: {
    setConfirmModalState: (state: ConfirmationModalState, action: PayloadAction<any>) => {
      for (let propertyName in initialState) {
        state[propertyName as keyof ConfirmationModalState] = action.payload[propertyName];
      }
    }
  }
});

export const { setConfirmModalState } = confirmationModalSlice.actions;

export const useGetConfirmationModalState = () => useSelector((state: any) => state[confirmationModalSlice.name]);

export const useSetConfirmModalState = () => {
  const dispatch = useDispatch();

  const openConfirmModal = (options: ConfirmationModalState) => {
    dispatch(
      setConfirmModalState({
        ...initialState,
        ...options
      })
    );
  };

  const closeConfirmModal = () => {
    dispatch(setConfirmModalState({ ...initialState }));
  };

  return { openConfirmModal, closeConfirmModal };
};

export default confirmationModalSlice.reducer;
