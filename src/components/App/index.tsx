import React from 'react';
import Filter from '../Filter';
import Tabs from '../Tabs';
import List from '../List';

import styles from './App.module.scss';

const App: React.FunctionComponent = () => {
  return (
    <>
      <header>
        <div className={styles.logo}></div>
      </header>
      <section className={styles.main}>
      
      <Filter />
      <Tabs />
      <List />
      
      </section>
    </>
  );
}

export default App;
