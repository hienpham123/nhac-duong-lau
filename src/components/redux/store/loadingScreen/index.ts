import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import REDUX_SLICE_NAMES from '../../../../shared/constants/redux-slice-names';

export interface LoadingScreenState {
  isLoading: boolean;
}

const initialState: LoadingScreenState = {
  isLoading: false
};

export const loadingSlice = createSlice({
  name: REDUX_SLICE_NAMES.LOADING_FULL_SCREEN,
  initialState,
  reducers: {
    setLoadingScreenState: (state: LoadingScreenState, { payload }: PayloadAction<any>) => {
      state = payload;
    }
  },
//   extraReducers: (builder) => {
//     builder.addMatcher(extendedApi.endpoints.getOrderBrowsingDetail.matchPending, (state, { payload }) => {
//       state.isLoading = false;
//     });
//     builder.addMatcher(extendedApi.endpoints.getOrderBrowsingDetail.matchFulfilled, (state, { payload }) => {
//       state.isLoading = false;
//     });
//   }
});

export const { setLoadingScreenState } = loadingSlice.actions;

export const useGetLoadingScreenState = () => useSelector((state: any) => state[loadingSlice.name]);

export const useSetLoadingScreenState = () => {
  const dispatch = useDispatch();

  const isDisplayLoadingScreen = (isLoading: boolean) => {
    dispatch(
      setLoadingScreenState({
        isLoading: isLoading
      })
    );
  };

  return { isDisplayLoadingScreen };
};
export default loadingSlice.reducer;
