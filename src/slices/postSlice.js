import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Post: [],
}

export const counterSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.Post.push(action.payload)
    },
    changeAnonymosity:(state,action)=>{
        // select post by id and change his Anonymosity
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPost,changeAnonymosity } = postSlice.actions

export default postSlice.reducer