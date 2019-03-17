import React from 'react';
import {deleteTask, editTask, removeInputValue} from "../../actions/taskActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

export  class List extends React.Component {

    render() {

        let { tasks, deleteTask, inputValue, editTask, removeInputValue } = this.props;

        return (
            <div>
                {
                   tasks.map(task =>
                         <p key={task.id}>
                             {task.value}
                             <button className={"btn"} onClick={() => {
                                    deleteTask(task.id)}}>
                                 удалить
                             </button>
                             <button className={"btn1"} onClick={() => {
                                 if(inputValue !=="") {
                                     editTask(task.id, inputValue);
                                     removeInputValue();
                                 }
                             }}>
                                 редактирование
                             </button>
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