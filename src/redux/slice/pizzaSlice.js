import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export  const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const {sort, category, currentPage,search}=params;

        const {data} = await axios.get(
            `https://6322c84ca624bced307e6cf0.mockapi.io/Pizzas?${category}&page=${currentPage}&limit=8&sortBy=${sort.sortProperty}&order=desc${search}`
          );
        
         
      return data;
    }
  )

const initialState = {
 pizzaItems:[],
 status:"loading"
 

  
};

const pizzaSllice =createSlice({
    name:"pizza",
    initialState,
    reducers:{
        setPizzaItems(state,action){
            state.pizzaItems=action.payload;
            
        },
     
        
        
    },
    extraReducers:  {
        
      [fetchPizzas.pending] : (state) => {
      state.status="loading";
      state.pizzaItems=[];
      },
      
       [fetchPizzas.fulfilled] : (state,action) => {
        state.pizzaItems=action.payload
        state.status="succes";
         
        },
        [fetchPizzas.rejected] : (state) => {
          state.pizzaItems=[];
          state.status="error";
           
          }
      },
});

export const {}=pizzaSllice.actions;
export default pizzaSllice.reducer;
