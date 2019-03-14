export function addTask(task) {
    return async function (dispatch, getState) {
        let tasks = await getState().taskReducer.tasks;

        tasks.push(task);

        dispatch({
            type: 'ADD_TASK',
            payload: tasks
        })
    }
}