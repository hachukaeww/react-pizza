import { CartItemType } from "../redux/slice/cart/types";

export const CalcTotalPrice=(items:CartItemType[])=>{
    return items.reduce((sum,item)=>{
    return (item.price*item.count)+sum;
  

   },0)
}
export const CalcTotalPriceMinus=(items:CartItemType[])=>{
    return items.reduce((sum,item)=>{
    return (item.price*item.count)-sum;
  

   },0)
}