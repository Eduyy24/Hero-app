import { createSlice } from '@reduxjs/toolkit'

export interface GeneralState {
  pagesData: PageData[];
  isFullData: boolean;
  dataSell: {};
}

const initialState = {
  pagesData: [],
  isFullData: false,
  dataSell: {}
} as GeneralState

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setPagesData: (state, action) => {
      state.pagesData = action.payload
      state.isFullData = true;
    },
    setDataSell: (state, action) => {
      state.dataSell = {...state.dataSell, ...action.payload}
    }
  },
})

export const { setPagesData, setDataSell } = generalSlice.actions

export default generalSlice.reducer