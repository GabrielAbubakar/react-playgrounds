import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction, toggleTodoAction } from './redux/actions/actions'


class App1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }

        //This is how to create fuctions in class components
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleTodo = this.toggleTodo.bind(this)
    }

    handleSubmit(e) {
        if (e.key === 'Enter' && this.state.input !== '') {
            //This is how to run a dispatch received from mapDispatchToProps
            this.props.addTodoDispatch(this.state.input)
            this.setState({ input: '' })
        }
    }

    toggleTodo(id) {
        this.props.toggleTodoDispatch(id)
    }

    render() {
        return (
            <>
                <h1>Hello App</h1>
                <input
                    value={this.state.input}
                    onChange={(e) => this.setState({ input: e.target.value })}
                    onKeyDown={this.handleSubmit}
                    type="text" />
                <ul>
                    {
                        // Use this.props.value to access data from redux mapStateToProps
                        this.props.todos && this.props.todos.map(todo => (
                            <li key={todo.id}
                                style={{ marginBottom: '15px' }}
                            >
                                <p style={{
                                    display: 'inline',
                                    padding: '3px',
                                    backgroundColor: todo.isCompleted === true ? 'green' : 'red',
                                    color: todo.isCompleted === true ? 'yellow' : 'white'
                                }}>
                                    {todo.name}
                                </p>
                                <button onClick={() => this.toggleTodo(todo.id)}>
                                    Complete
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }

}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodoDispatch: (todo) => dispatch(addTodoAction(todo)),
        toggleTodoDispatch: (todoId) => dispatch(toggleTodoAction(todoId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App1)