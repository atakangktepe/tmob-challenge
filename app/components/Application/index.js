import React, { Component } from 'react';
import Header from '../Header';
import Matrix from '../Matrix';
import styles from './style';

class Application extends Component {
  constructor(props) {
    super(props);

    // Binding functions
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);

    // Initial States
    this.state = {
      text: ""
    }
  }

  // Handlings input changes
  handleChange(e) {

    // If input value longer than 25 prevent typing to the input
    if (e.target.value.length > 25) {
      e.preventDefault();
      e.stopPropagation();
    } else {

      // Else set state to value
      this.setState({
        text: e.target.value
      });
    }
  }

  resetState() {
    this.setState({
      text: "",
      slicedText: []
    });
  }

  componentDidUpdate(prevProps, prevState) {

    // If text state is really updated, assign text into the array with slicing
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
              {
                // For loop as table row length
                [...Array(5)].map((x, i) => {
                  return (
                    <Matrix key={i} startPoint={(i * 5) + 1} row={i} text={this.state.slicedText} />
                  )
                })
              }
            </div>

            <input type="text" className={styles.matrix_input} placeholder="Karakterler" value={this.state.text} onChange={this.handleChange} maxLength="25" />
            <button onClick={this.resetState} className={styles.reset_state}>
              Sıfırla
            </button>
          </main>
        </div>
      </div>
    );
  }
};

export default Application;
