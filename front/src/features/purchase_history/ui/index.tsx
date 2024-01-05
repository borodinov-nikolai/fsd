import React from 'react'
import styles from './PurchaseHistory.module.scss'


const Purchase_history = () => {
  return (
    <div className={styles.root} >
        <div className={styles.leftBlock} >
            <h2 className={styles.leftBloc_title} > История заказов</h2>
            <p className={styles.leftBlock_quantity} >Последние 15 заказов за последний год</p>
        </div>
        <div className={styles.rightBlock} >
            <div className={styles.rightBlock_head} >
                <p>№</p>
                <p>Время заказа</p>
                <p>Сумма</p>
                <p>Чек</p>
            </div>
            <ul className={styles.rightBlock_orderList} >
                <li>
                    <p>148923</p>
                    <p>3 авг. 2023г., 16:23</p>
                    <p>1 805 ₽</p>
                    <p className={styles.rightBlock_check} >Посмотреть</p>
                </li>
                <li>
                    <p>148923</p>
                    <p>3 авг. 2023г., 16:23</p>
                    <p>1 805 ₽</p>
                    <p  className={styles.rightBlock_check}  >Посмотреть</p>
                </li>
                <li>
                    <p>148923</p>
                    <p>3 авг. 2023г., 16:23</p>
                    <p>1 805 ₽</p>
                    <p  className={styles.rightBlock_check}  >Посмотреть</p>
                </li>
                <li>
                    <p>148923</p>
                    <p>3 авг. 2023г., 16:23</p>
                    <p>1 805 ₽</p>
                    <p  className={styles.rightBlock_check}  >Посмотреть</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Purchase_history