import React from 'react';
import {addInputValue, deleteTask, editTask, removeInputValue} from "../../actions/taskActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { Button, Popconfirm, message } from 'antd';
import { Input } from 'antd';

export  class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = { clicked: false }
    }

    confirm = (id) => {
        this.props.deleteTask(id);
        message.success('Click on Yes');
    }

    cancel = () => {
        message.error('Click on No');
    }

    render() {

        let { tasks, deleteTask, inputValue, editTask, removeInputValue } = this.props;

        return (
            <div className={"edit"}>
                {
                   tasks.map(task =>

                         <p key={task.id}>

                             <Input  onChange={(evt) => this.editTask(task.value, task.id)}
                                 className={this.state.clicked === task.id ? "more" : "editName"}
                                    disabled={this.state.clicked === task.id ? false : true }
                                    value={task.value} />

                             <Popconfirm title="Вы хотитеи удалить эту задачу?" onConfirm={() => this.confirm(task.id)} onCancel={() => this.cancel} okText="Да" cancelText="Нет">

                                 <Button className={"btn"} onClick={() => {
                                        }}>
                                     удалить
                                 </Button>

                             </Popconfirm>

                             <Button className={"btn"} onClick={() => {
                                 document.getElementsByClassName('editName')
                                 if(inputValue !=="") {
                                     editTask(task.id, inputValue);
                                     removeInputValue();
                                 }
                                 if(this.state.clicked !== task.id) {
                                     this.setState({clicked: task.id});
                                 } else {
                                     this.setState({clicked: false});
                                 }
                             }}>
                                {(this.state.clicked === task.id) ? 'сохранить' : 'редактирование'}
                             </Button>

                         </p>
                    )
                }
            </div>
        )
    }
    editTask = (evt) => {
        this.props.addInputValue(evt.target.value)
    }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
    deleteTask,
    editTask,
    addInputValue,
    removeInputValue
},dispatch);

const mapSateToProps = state =>({
    ...state,
    tasks: state.taskReducer.tasks,
    inputValue: state.taskReducer.inputValue
});

export default connect(mapSateToProps, mapDispatchToProps)(List)