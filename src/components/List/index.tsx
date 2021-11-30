import React from "react";

import styles from './List.module.scss'

const List: React.FC = () => {
    return (
        <div className={styles.list}>
            <ul>
                <li className={styles.ticket}>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <div className={styles.price}>13 400 P</div>
                            <div className={styles.logo}></div>
                        </div>
                        <div className={styles.info}>
                                <div className={styles.route}>
                                    <div className={styles.title}>MOW - HKT</div>
                                    <div className={styles.description}>10:45 - 08:00</div>
                                </div>
                                <div className={styles.route}>
                                    <div className={styles.title}>В ПУТИ</div>
                                    <div className={styles.description}>21ч 15м</div>
                                </div>
                                <div className={styles.route}>
                                    <div className={styles.title}>2 ПЕРЕСАДКИ</div>
                                    <div className={styles.description}>HKG, JNB</div>
                                </div>
                        </div>
                        <div className={styles.info}>
                        <div className={styles.route}>
                                    <div className={styles.title}>MOW - HKT</div>
                                    <div className={styles.description}>12:20 - 00:50</div>
                                </div>
                                <div className={styles.route}>
                                    <div className={styles.title}>В ПУТИ</div>
                                    <div className={styles.description}>13ч 30м</div>
                                </div>
                                <div className={styles.route}>
                                    <div className={styles.title}>1 ПЕРЕСАДКИ</div>
                                    <div className={styles.description}>HKG</div>
                                </div>
                        </div>
                    </div>
                </li>
                <li className={styles.ticket}>
                <div className={styles.container}>
                        <div className={styles.header}>
                            <div className={styles.price}>13 400 P</div>
                            <div className={styles.logo}></div>
                        </div>
                        <div className={styles.info}>
                                <div className={styles.route}>
                                    <div className={styles.title}>MOW - HKT</div>
                                    <div className={styles.description}>10:45 - 08:00</div>
                                </div>
                                <div className={styles.route}>
                                    <div className={styles.title}>В ПУТИ</div>
                                    <div className={styles.description}>21ч 15м</div>
                                </div>
                                <div className={styles.route}>
                                    <div className={styles.title}>2 ПЕРЕСАДКИ</div>
                                    <div className={styles.description}>HKG, JNB</div>
                                </div>
                        </div>
                        <div className={styles.info}>
                        <div className={styles.route}>
                                    <div className={styles.title}>MOW - HKT</div>
                                    <div className={styles.description}>12:20 - 00:50</div>
                                </div>
                                <div className={styles.route}>
                                    <div className={styles.title}>В ПУТИ</div>
                                    <div className={styles.description}>13ч 30м</div>
                                </div>
                                <div className={styles.route}>
                                    <div className={styles.title}>1 ПЕРЕСАДКИ</div>
                                    <div className={styles.description}>HKG</div>
                                </div>
                        </div>
                    </div>
                </li>
                <li className={styles.ticket}>
                <div className={styles.container}>
                        <div className={styles.header}>
                            <div className={styles.price}>13 400 P</div>
                            <div className={styles.logo}></div>
                        </div>
                        <div className={styles.info}>
                                <div className={styles.route}>
                                    <div className={styles.title}>MOW - HKT</div>
                                    <div className={styles.description}>10:45 - 08:00</div>
                                </div>
                                <div className={styles.route}>
                                    <div className={styles.title}>В ПУТИ</div>
                                    <div className={styles.description}>21ч 15м</div>
                                </div>
                                <div className={styles.route}>
                                    <div className={styles.title}>2 ПЕРЕСАДКИ</div>
                                    <div className={styles.description}>HKG, JNB</div>
                                </div>
                        </div>
                        <div className={styles.info}>
                        <div className={styles.route}>
                                    <div className={styles.title}>MOW - HKT</div>
                                    <div className={styles.description}>12:20 - 00:50</div>
                                </div>
                                <div className={styles.route}>
                                    <div className={styles.title}>В ПУТИ</div>
                                    <div className={styles.description}>13ч 30м</div>
                                </div>
                                <div className={styles.route}>
                                    <div className={styles.title}>1 ПЕРЕСАДКИ</div>
                                    <div className={styles.description}>HKG</div>
                                </div>
                        </div>
                    </div>
                </li>
            </ul>

            <div className={styles.button}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</div>
        </div>
    )
}

export default List;