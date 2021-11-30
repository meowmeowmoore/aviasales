import React from "react";

import styles from './Tabs.module.scss'

const Tabs: React.FC = () => {

    return (
        <div className={styles.tabs}>
    
                <div className={styles.active}>
                    <p>САМЫЙ ДЕШЕВЫЙ</p>
                </div>
                <div className={styles.button}>
                    <p>САМЫЙ БЫСТРЫЙ</p>
                </div>
                <div className={styles.button}>
                    <p>ОПТИМАЛЬНЫЙ</p>
                </div>
        
        </div>
    )
}

export default Tabs;