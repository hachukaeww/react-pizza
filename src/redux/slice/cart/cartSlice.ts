import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalcTotalPrice } from "../../../utils/CalcTotalPrice";
import { getCartFromLS } from "../../../utils/getItemCartLS";
import {  CartItemType, CartSliceState } from "./types";

const {items,totalPrice} = getCartFromLS();
const initialState:CartSliceState = {
  totalPrice:totalPrice,
  items:items,
 
 
};
 const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{

      addPizza(state, action:PayloadAction<CartItemType>) { 
        const findItem = state.items.find((obj) => obj.id === action.payload.id);
        if (findItem) {
          findItem.count++;
        } else {
          state.items.push({
            ...action.payload,
            count: 1,
          });
        }
        state.totalPrice=CalcTotalPrice(state.items);
        

      },
      minusItem(state,action:PayloadAction<string>){
        const findItem = state.items.find((obj) => obj.id === action.payload);

        if (findItem) {
          findItem.count--;
         
        }
        state.totalPrice=CalcTotalPrice(state.items);
      
      },
      removePizza(state,action:PayloadAction<string>){
        state.items=state.items.filter(item=>item.id!==action.payload)
      },
      clearItemsPizza(state){
        state.items=[];
        state.totalPrice=0;
      }
      
      
        
    }
});
 



export const {addPizza,removePizza,clearItemsPizza,minusItem}= cartSlice.actions;
export default cartSlice.reducer;

