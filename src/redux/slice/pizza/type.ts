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