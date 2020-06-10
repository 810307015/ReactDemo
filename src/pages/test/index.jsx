import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as indexAction from 'Actions';
import { AsyncComponent } from 'Utils/component';

const HelloWorld = AsyncComponent(() => import('Components/test/HelloWorld'));

class Test extends Component {
  
  add = () => {
    const { indexAction: { testAdd } } = this.props;
    testAdd({ data: Number(this.input.value) });
  }

  render() {
    const { count } = this.props;
    return (
      <div className="Test">
        <HelloWorld />
        <input type="number" ref={input => this.input = input} />
        <div className="add" onClick={this.add}>增加</div>
        <div className="show">{count}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { index } = state;
  return {
    ...index
  };
}

const mapDispatchToProps = dispatch => {
  return {
    indexAction: bindActionCreators(indexAction, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(Test);