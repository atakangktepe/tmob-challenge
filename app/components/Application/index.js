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
    this.setState({
      text: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.text !== this.state.text) {
      this.setState({
        slicedText: this.state.text.match(/.{1,5}/g)
      });
    }
  }

  componentWillUpdate(n, s) {
    console.log("s.slicedText", s.slicedText);
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
                  <Matrix key={i} row={(i * 5) + 1} />
                )
              })}
            </div>

            <input type="text" onChange={this.handleChange}/>
          </main>
        </div>
      </div>
    );
  }
};

export default Application;
