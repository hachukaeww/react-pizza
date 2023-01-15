import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export type SortType = {
  name: string;
  sortProperty: string;
}
interface FilterSlice {
  SearchValue: string;
  currentPage: number;
  categoryId: number;
  sort: SortType;

}

const initialState: FilterSlice = {
  SearchValue: "",
  currentPage: 1,
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating"
  }

  


};
console.log(initialState.sort);
const filterSllice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setActiveSort(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;

    },
    setFilters(state, action: PayloadAction<FilterSlice>) {
      state.currentPage =  Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;


    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.SearchValue = action.payload;

    },


  }
});
export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export const { setCategoryId, setActiveSort, setCurrentPage, setFilters, setSearchValue } = filterSllice.actions;
export default filterSllice.reducer;

