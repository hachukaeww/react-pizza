import React from 'react';
import Pagination from '@mui/material/Pagination';
import styles from "./Pagination.module.scss";
function PaginationReact({onChangeCurrentPage}) {
  return (
  <div className={styles.root}>
    <Pagination onChange={(_,num)=>onChangeCurrentPage(num)} count={3} size="large" />
</div>
  )
}

export default PaginationReact;