import React from "react";

import styles from './Filter.module.scss';

const Filter: React.FC = () => {

    return (
        <div className={styles.filter}>
            
            <ul>
                <li className={styles.titleWrapper}>
                <span className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                </li>
                <li className={styles.checkbox}>
                    <input className={styles.checkboxInput} type="checkbox" id='c1' value='Все'/>
                    <label className={styles.checkboxLabel} htmlFor='c1'>Все</label>
                </li>

                <li className={styles.checkbox}>
                    <input className={styles.checkboxInput} type="checkbox" id='c2' value='Все'/>
                    <label className={styles.checkboxLabel} htmlFor='c2'>Без пересадки</label>
                </li>

                <li className={styles.checkbox}>
                    <input className={styles.checkboxInput} type="checkbox" id='c3' value='Все'/>
                    <label className={styles.checkboxLabel} htmlFor='c3'>1 пересадка</label>
                </li>

                <li className={styles.checkbox}> 
                    <input className={styles.checkboxInput} type="checkbox" id='c4' value='Все'/>
                    <label className={styles.checkboxLabel} htmlFor='c4'>2 пересадки</label>
                </li>

                <li className={styles.checkbox}>
                    <input className={styles.checkboxInput} type="checkbox" id='c5' value='Все'/>
                    <label className={styles.checkboxLabel} htmlFor='c5'>3 пересадки</label>
                </li>
            </ul>
        </div>
    )
}

export default Filter;