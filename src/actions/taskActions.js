import * as axios from "axios";

export function addTask(task) {
    return async function (dispatch, getState) {
        let tasks = getState().taskReducer.tasks;

        tasks.push(task);

        dispatch({
            type: 'ADD_TASK',
            payload: tasks
        })
    }
}
export function deleteTask(id) {
    return async function (dispatch, getState) {
        let tasks = getState().taskReducer.tasks;
        let index = -1;

        tasks.find(x => {
            index = index + 1;
            return x.id === id
        });

        tasks.splice(index, 1);

        dispatch({
            type: 'DELETE_TASK',
            payload: tasks
        })

    }
}
export function editTask(id, value) {
    return async function (dispatch, getState) {
        let tasks = getState().taskReducer.tasks;

        tasks.find(task => {
            if(task.id === id){
                task.value = value
            }
        });

        dispatch({
            type: 'EDIT_TASK',
            payload: tasks
        })

    }
}
export function addInputValue(value) {
    return async function (dispatch, getState) {



        dispatch({
            type: 'ADD_INPUT_VALUE',
            payload: value
        })

    }
}
export function addTaskInputValue(value) {
    return async function (dispatch, getState) {
        dispatch({
            type: 'ADD_TASK_INPUT_VALUE',
            payload: value
        })

    }
}

export function removeInputValue() {
    return async function (dispatch, getState) {
        dispatch({
            type: 'REMOVE_INPUT_VALUE',
            payload: ""
        })

    }
}

export const log_in_app = (login, password) => async dispatch => {
    const res = await axios.Auth.login(login, password);
    if(res.success === true) {
        // dispatch({ type: actionTypes.INIT_ALL_CONSTANT, payload: res.data });
        return res;
    } else {
        return res;
    }
};
