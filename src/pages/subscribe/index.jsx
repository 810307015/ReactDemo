import React, { Component } from 'react';

import { inject } from 'Utils/component';

class Subscribe extends Component {
  
  add = () => {
    const { testService } = this.props;
    testService.add({
      count: Number(this.input.value)
    })
  }

  render() {
    const { count } = this.props;
    return (
      <div className="Test">
        <input type="number" ref={input => this.input = input} />
        <div className="add" onClick={this.add}>增加</div>
        <div className="show">{count}</div>
      </div>
    )
  }
}

const mapStateToProps = (data) => {
  const {
    count,
    testService
  } = data;

  return {
    count,
    testService
  }
}

export default inject(mapStateToProps)(Subscribe);