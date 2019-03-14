import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To do app</h1>
        <Form />
        <List data={this.props.tasks} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({
    tasks: state.taskReducer.tasks
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

