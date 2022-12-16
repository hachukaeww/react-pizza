import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sort: "rating",
  },
};
 const filterSllice =createSlice({
    name:"filters",
    initialState,
    reducers:{
        setCategoryId(state,action){
            state.categoryId=action.payload;
        },
        setActiveSort(state,action){
            state.sort=action.payload
        }
        
    }
});

export const {setCategoryId,setActiveSort}=filterSllice.actions;
export default filterSllice.reducer;

