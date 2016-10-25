import React from 'react';
import Header from '../Header';
// Style
import styles from './style';

const Application = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrap}>
        <Header />

        <main className={styles.body}>
          <p>
            Hi Tmob, looks like you're looking my commits. Thanks for viewing :).
            <b>I hope you like it.</b>
          </p>
        </main>
      </div>
    </div>
  );
};

Application.displayName = 'Tmob Challenge';

export default Application;
