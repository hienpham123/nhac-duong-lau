import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import REDUX_SLICE_NAMES from '../../../../shared/constants/redux-slice-names';
import { STATUS_TOAST } from '../../../../shared/const';

interface InitialStateType {
  toastMessage: any;
}

const initialState: InitialStateType = {
  toastMessage: {}
};

export const toastMessageSlice = createSlice({
  name: REDUX_SLICE_NAMES.TOAST_NOTIFICATION,
  initialState,
  reducers: {
    setToastMessage: (state, { payload }) => {
      console.log('payload setToastMessage', payload);
      state.toastMessage = payload;
      if (!payload.message && payload.status === STATUS_TOAST.ERROR) {
        state.toastMessage.message = 'Hệ thống xảy ra lỗi. Vui lòng liên hệ với Quản trị viên';
      }
    }
  }
});

export const { setToastMessage } = toastMessageSlice.actions;

export const useSetToastInformationState = () => {
  const dispatch = useDispatch();
  const setToastInformation = (infoToast: object) => {
    dispatch(setToastMessage(infoToast));
  };
  return { setToastInformation };
};

export default toastMessageSlice.reducer;
