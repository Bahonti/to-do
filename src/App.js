import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import LoginForm from "./components/Login/Login";

class App extends Component {
    state = {
        isAuth: false
    };

    changeAuth = () => {
        this.setState({isAuth: true})
    }

    render() {
        const {isAuth} = this.state;

        return (
            <div className="App">
                {
                    isAuth ?
                        <React.Fragment>
                            <h1>To do app</h1>
                            <Form />
                            <List />
                        </React.Fragment>
                    : <LoginForm changeAuth={this.changeAuth} />
                }

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App)

