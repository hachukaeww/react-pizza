import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
type FetchPizzasType = Record<string, string>;
export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params: FetchPizzasType) => {
    const { sortBy, category, currentPage, search } = params;

    const { data } = await axios.get<pizzaItemsType[]>(
      `https://6322c84ca624bced307e6cf0.mockapi.io/Pizzas?${category}&page=${currentPage}&limit=8&sortBy=${sortBy}&order=desc${search}`
    );


    return data as pizzaItemsType[];
  }
)
export type pizzaItemsType = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  sizes: number[];
  types: number[];
  rating: number

};
export interface pizzaSliceType {
  pizzaItems: pizzaItemsType[]
  status: Status;
}
export enum Status {
  LOADING = "loading",
  SUCCESS = "succes",
  ERROR = "error",
}

const initialState: pizzaSliceType = {
  pizzaItems: [],
  status: Status.LOADING,



};

const pizzaSllice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizzaItems(state, action) {
      state.pizzaItems = action.payload;

    },



  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.pizzaItems = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzaItems = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.pizzaItems = [];
    });
  },
});


export default pizzaSllice.reducer;
