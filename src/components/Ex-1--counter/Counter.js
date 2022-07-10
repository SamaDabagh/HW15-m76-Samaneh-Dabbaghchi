import { Component } from "react";
import "./style.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.setState((previousNum) => ({
      count: previousNum.count + 1,
    }));
  }

  decrease() {
    this.setState((nextNum) => ({
      count: nextNum.count - 1,
    }));
  }
  render() {
    return (
      <>
        <article className="container">
          <div className="outPut">{this.state.count}</div>
          <div className="wrapper">
            <button className="increase" type="button" onClick={this.increase}>
              +
            </button>
            <button
                className="decrease"
                type="button"
                onClick={this.decrease}
              >
                -
              </button>
          </div>
        </article>
      </>
    );
  }
}

export default Counter;
