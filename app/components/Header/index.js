import React from 'react';
import SubHeader from './SubHeader';
import styles from './style';

const Header = () => {
  return (
    <header className={styles.main}>
      <div className={styles.wrap}>
        Header
      </div>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
