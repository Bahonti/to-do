export default (state = { tasks: [] }, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            return Object.assign({}, state, {tasks: action.payload})
        }
        default:
            return state;
    }
};

