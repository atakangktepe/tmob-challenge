import React, { Component } from 'react';
import Header from '../Header';
import Matrix from '../Matrix';
import styles from './style';

class Application extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      text: ""
    }
  }

  handleChange(e) {
    if (e.target.value.length > 25) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      this.setState({
        text: e.target.value
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.text !== this.state.text) {
      this.setState({
        slicedText: this.state.text.match(/.{1,5}/g)
      });
    }
  }

  render() {

    return (
      <div className={styles.main}>
        <div className={styles.wrap}>
          <Header />

          <main className={styles.body}>
            <div className={styles.matrix}>
              {[...Array(5)].map((x, i) => {
                return (
                  <Matrix key={i} startPoint={(i * 5) + 1} row={i} text={this.state.slicedText} />
                )
              })}
            </div>

            <input type="text" className={styles.matrix_input} placeholder="Karakterler" onChange={this.handleChange} maxLength="25" />
          </main>
        </div>
      </div>
    );
  }
};

export default Application;
