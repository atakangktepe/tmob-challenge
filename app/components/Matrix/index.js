import React from 'react';
import styles from './style';

const Matrix = React.createClass({
  render() {

      return (
        <div className={styles.matrix__row}>
          {[...Array(5)].map((x, i) => {
            let column = this.props.startPoint + i;
            let text;

            if (this.props.text && this.props.text[this.props.row]) {
              text = this.props.text[this.props.row][i];
            }

            return (
              <div className={styles.matrix__item} key={i}>
                {text === " " ? "boşluk" : text}
              </div>
            )
          })}
        </div>
      )
  }
});

export default Matrix;
