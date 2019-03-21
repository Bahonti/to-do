import React from 'react';
import { connect } from 'react-redux';
import {addInputValue, addTask, removeInputValue} from '../../actions/taskActions';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import { Input } from 'antd';



class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <Input className="input" value={ this.props.inputValue} onChange={this.updateInputValue}/>
                <Button className={"btn2"} onClick={() => {
                    if(this.props.inputValue !== ""){
                        this.props.addTask({id:new Date().getTime(), value: this.props.inputValue})}
                        this.props.removeInputValue()
                    }}
                >Добавить</Button>
            </div>
        )
    }
    updateInputValue = (evt) => {
        this.props.addInputValue(evt.target.value)
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addTask,
    addInputValue,
    removeInputValue
}, dispatch);

const mapStateToProps = state => ({
    inputValue: state.taskReducer.inputValue
});

export default connect(mapStateToProps, mapDispatchToProps)(Form)