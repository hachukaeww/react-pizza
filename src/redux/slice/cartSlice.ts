import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export type CartItemType={
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  size: number;
  type: string;
  count:number;
};

interface CartSliceState{
  totalPrice:number;
  items:CartItemType[]
}
const initialState:CartSliceState = {
  totalPrice:0,
  items:[],
 
 
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
        state.totalPrice=state.items.reduce((sum,item)=>{
         return (item.price*item.count)+sum;
       

        },0);
        

      },
      minusItem(state,action:PayloadAction<string>){
        const findItem = state.items.find((obj) => obj.id === action.payload);

        if (findItem) {
          findItem.count--;
         
        }
      
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
  //@ts-ignore
export const selectCartItemById=(id:string)=>(state:RootState) =>state.cart.items.find((obj) => obj.id === id);

export const selectCart = (state:RootState) => state.cart;


export const {addPizza,removePizza,clearItemsPizza,minusItem}= cartSlice.actions;
export default cartSlice.reducer;

