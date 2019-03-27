import React from 'react';
import {addInputValue, deleteTask, editTask, removeInputValue, addTaskInputValue} from "../../actions/taskActions";
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

        let { tasks, deleteTask, inputValue, editTask, removeInputValue, taskInputValue, addTaskInputValue } = this.props;

        return (
            <div className={"edit"}>
                {
                   tasks.map(task =>

                         <p key={task.id}>

                             {this.state.clicked !== task.id
                                 ? <span style={{width: '300px', display: 'inline-block'}}>{task.value}</span>
                                 : <Input  onChange={(evt) => addTaskInputValue(evt.target.value)}
                                          className={this.state.clicked === task.id ? "more" : "editName"}
                                          disabled={this.state.clicked === task.id ? false : true }
                                          value={this.props.taskInputValue} />
                             }

                             <Popconfirm title="Вы хотитеи удалить эту задачу?" onConfirm={() => this.confirm(task.id)} onCancel={() => this.cancel} okText="Да" cancelText="Нет">

                                 <Button className={"btn"} onClick={() => {
                                        }}>
                                     удалить
                                 </Button>

                             </Popconfirm>

                             <Button className={"btn"} onClick={() => {

                                 if(this.state.clicked !== task.id) {
                                     addTaskInputValue(task.value);
                                     this.setState({clicked: task.id});
                                 } else {
                                     editTask(task.id, this.props.taskInputValue);
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
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
    deleteTask,
    editTask,
    addInputValue,
    removeInputValue,
    addTaskInputValue
},dispatch);

const mapSateToProps = state =>({
    ...state,
    tasks: state.taskReducer.tasks,
    inputValue: state.taskReducer.inputValue,
    taskInputValue: state.taskReducer.taskInputValue
});

export default connect(mapSateToProps, mapDispatchToProps)(List)