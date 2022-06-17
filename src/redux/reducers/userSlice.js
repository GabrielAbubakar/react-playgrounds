const initialState = {
    todos: [
        { id: 10, name: 'Gabe', isCompleted: false },
        { id: 11, name: 'Joe', isCompleted: false },
        { id: 12, name: 'Mike', isCompleted: false },
    ]
}

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todos/addedTodo': {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: nextTodoId(state.todos),
                        name: action.payload,
                        isCompleted: false
                    }
                ]
            }
        }
        case 'todos/toggleTodo': {
            return {
                ...state,
                todos: [
                    ...state.todos.map((todo) => {
                        if (todo.id !== action.payload) {
                            return todo
                        }

                        return {
                            ...todo,
                            isCompleted: !todo.isCompleted
                        }
                    })
                ]
            }
        }

        default:
            return state
    }

}

export default rootReducer;