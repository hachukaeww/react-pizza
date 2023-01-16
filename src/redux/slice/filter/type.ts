export type SortType = {
    name: string;
    sortProperty: "rating" | "title" | "price";
  
  }
  export interface FilterSlice {
    SearchValue: string;
    currentPage: number;
    categoryId: number;
    sort: SortType;
  
  }