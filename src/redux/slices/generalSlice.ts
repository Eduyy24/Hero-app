import { createSlice } from '@reduxjs/toolkit'

export interface GeneralState {
  pagesData: PageData[];
  isFullData: boolean;
}

const initialState = {
  pagesData: [],
  isFullData: false,
} as GeneralState

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setPagesData: (state, action) => {
      state.pagesData = action.payload
      state.isFullData = true;
    }
  },
})

export const { setPagesData } = generalSlice.actions

export default generalSlice.reducer