import React from 'react';
import { connect } from 'react-redux';
import {addInputValue, addTask, removeInputValue} from '../../actions/taskActions';
import { bindActionCreators } from 'redux'


class Form extends React.Component {
    render() {
        return (
            <div>
                <input value={ this.props.inputValue} onChange={this.updateInputValue}/>
                <button className={"btn2"} onClick={() => {
                    if(this.props.inputValue !== ""){
                        this.props.addTask({id:new Date().getTime(), value: this.props.inputValue})}
                        this.props.removeInputValue()
                    }}
                >Add task</button>
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