export default (state = { tasks: [], inputValue: '' }, action) => {
    switch (action.type) {
        case 'ADD_TASK':
        case 'DELETE_TASK':
        case 'EDIT_TASK': {
            return Object.assign({}, state, {tasks: action.payload})
        }
        case 'ADD_INPUT_VALUE':
        case 'REMOVE_INPUT_VALUE':{
            return Object.assign({}, state, {inputValue: action.payload})
        }
        default:
            return state;
    }
};

