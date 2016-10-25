import React from 'react';
import styles from './style';

const Matix = React.createClass({
  render() {
      return (
        <div className={styles.matrix__row}>
          {[...Array(5)].map((x, i) => {
            let column = this.props.row + i;

            return (
              <div className={styles.matrix__item} key={i}>
                {column}
              </div>
            )
          })}
        </div>
      )
  }
});

export default Matix;
