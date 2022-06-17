import React, { useState } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from './redux/actions/actions'


const App = (props) => {

    const [input, setInput] = useState('')
    function handleSubmit(e) {
        if (e.key === 'Enter' && input !== '') {
            props.addTodos(input)
            setInput('')
        }
    }

    function toggleTodo(id) {
        props.toggleTodo(id)
    }


    return (
        <div>
            <h1>Hello App</h1>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleSubmit}
                type="text" />
            <ul>
                {
                    props.todos && props.todos.map(todo => (
                        <li key={todo.id}
                            style={{ marginBottom: '15px' }}
                        >
                            <p style={{ display: 'inline', padding: '3px', backgroundColor: todo.isCompleted === true ? 'green' : 'red', color: todo.isCompleted === true ? 'yellow' : 'white' }}>
                                {todo.name}
                            </p>
                            <button onClick={() => toggleTodo(todo.id)}>
                                Complete
                            </button>
                        </li>
                    ))
                }
            </ul>

        </div >
    )
}


function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodos: (todo) => dispatch(addTodo(todo)),
        toggleTodo: (todoId) => dispatch(toggleTodo(todoId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)