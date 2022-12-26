import React from 'react';
import Pagination from '@mui/material/Pagination';
import styles from "./Pagination.module.scss";
function PaginationReact({onChangePage}) {
  return (
  <div className={styles.root}>
    <Pagination onChange={(_,num)=>onChangePage(num)} count={3} size="large" />
</div>
  )
}

export default PaginationReact;