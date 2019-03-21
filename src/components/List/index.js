import React from 'react';
import {deleteTask, editTask, removeInputValue} from "../../actions/taskActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { Button, Popconfirm, message } from 'antd';

export  class List extends React.Component {

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
            <div>
                {
                   tasks.map(task =>
                         <p key={task.id}>
                             {task.value}
                             <Popconfirm title="Вы хотитеи удалить эту задачу?" onConfirm={() => this.confirm(task.id)} onCancel={() => this.cancel} okText="Да" cancelText="Нет">
                                 <Button className={"btn"} onClick={() => {
                                        }}>
                                     удалить
                                 </Button>
                             </Popconfirm>

                             <Button className={"btn1"} onClick={() => {
                                 if(inputValue !=="") {
                                     editTask(task.id, inputValue);
                                     removeInputValue();
                                 }
                             }}>
                                 редактирование
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
    removeInputValue
},dispatch);

const mapSateToProps = state =>({
    ...state,
    tasks: state.taskReducer.tasks,
    inputValue: state.taskReducer.inputValue
});


export default connect(mapSateToProps, mapDispatchToProps)(List)