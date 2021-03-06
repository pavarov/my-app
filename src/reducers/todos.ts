import {ActionTypes, Todo, Action} from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            const id = action.payload;
            return state.filter((todo: Todo) => todo.id !== id)
        default:
            return state;
    }
}