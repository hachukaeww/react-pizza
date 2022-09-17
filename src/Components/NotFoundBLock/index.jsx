import React from 'react';
import styles from './NotFound.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.root}>
     <h1>
          <span>:(</span>
          <br />
          Ничего не найдено
          <p className={styles.suptitle} >К сожалению, данная страница отсутствует в нашем интернет-магазине</p>
     </h1>
    </div>
  )
}

export default NotFoundBlock;