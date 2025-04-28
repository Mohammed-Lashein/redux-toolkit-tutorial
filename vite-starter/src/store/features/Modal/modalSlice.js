import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false
}

const modalSlice = createSlice({
  // generated action types will use that name as a prefix 
  // eg myAmazingModal/openModal
  name: "myAmazingModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true
    },
    closeModal: (state) => {
      state.isModalOpen = false
    }
  }
})

console.log('##This is modal slice##');
console.log(modalSlice);

export const modalReducer = modalSlice.reducer
export const {openModal, closeModal} = modalSlice.actions