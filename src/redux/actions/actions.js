export const addTodoAction = (todo) => {
    return {
        type: 'todos/addedTodo',
        payload: todo
    }
}

export const toggleTodoAction = (todoId) => {
    return {
        type: 'todos/toggleTodo',
        payload: todoId
    }
}