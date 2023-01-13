import React from 'react';
import Pagination from '@mui/material/Pagination';
import styles from "./Pagination.module.scss";
type PaginationType={
  onChangeCurrentPage:any
}
const PaginationReact:React.FC<PaginationType>=({onChangeCurrentPage})=> {
  return (
  <div className={styles.root}>
    <Pagination onChange={(_,num)=>onChangeCurrentPage(num)} count={3} size="large" />
</div>
  )
}

export default PaginationReact;