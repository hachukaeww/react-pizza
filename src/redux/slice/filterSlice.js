import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage:1,
  categoryId: 0,
  sort: {
   name: "популярности",
    sortProperty: "rating"
  }

  
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
        },
        setCurrentPage(state,action){
          state.currentPage=action.payload
       },
          setFilters(state,action){
          state.currentPage = Number(action.payload.currentPage);
          state.categoryId = Number(action.payload.categoryId);
          state.sort = action.payload.sort;
        }
        
        
    }
});

export const {setCategoryId,setActiveSort,setCurrentPage,setFilters}=filterSllice.actions;
export default filterSllice.reducer;

