export type CartItemType={
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    size: number;
    type: string;
    count:number;
  };
  
  export interface CartSliceState{
    totalPrice:number;
    items:CartItemType[]
  }