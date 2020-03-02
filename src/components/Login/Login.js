import React, { Component } from 'react';
import {Button, Form, Icon, Input} from "antd";

class Login extends Component{
    state = {
        authError: null,
        submitAuth: false,
        login: "",
        password: ""
    };

    signApp = () => {
        sessionStorage.setItem('user', this.state.login);
        if (this.state.login===""){
            alert("Введите свои логин")
        } else if(this.state.password===""){
            alert("Введите свои пароль")
        } else {
        this.props.changeAuth();
        }
    }

    loadLogin = (e) => {
        this.setState({login: e.target.value})
    }

    loadPassword = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        const { suffix, showPassword } = this.props;
        const { submitAuth } = this.state;
        return (
            <div className="login">
                <Form className="login-form">
                    <Form.Item >
                        <Input onChange={(e) => this.loadLogin(e)} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="text" id="login" placeholder="Логин"
                        />
                    </Form.Item>
                    <Form.Item >
                        <Input onChange={(e) => this.loadPassword(e)} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type={showPassword ? 'text' : 'password'} id="password"
                               placeholder="Пароль" suffix={suffix}  />
                    </Form.Item>
                    <p className="authError"></p>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="col-12 login-form-button" onClick={this.signApp} loading={submitAuth}>Войти</Button>
                    </Form.Item>
                </Form>
            </div>

        );
    }
}

export default Login;