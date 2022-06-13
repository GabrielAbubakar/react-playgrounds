import React, { useState } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addUser } from './redux/actions/actions'


const App = (props) => {

    const [input, setInput] = useState('')
    function handleSubmit(e) {
        if (e.key === 'Enter') {
            props.addUsers(input)
            setInput('')
        }
    }


    return (
        <div>
            <h1>Hello App</h1>
            <input
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleSubmit}
                type="text" />
            {
                props.users && props.users.map(user => (
                    <p>{user} welcome</p>
                ))
            }
        </div>
    )
}


function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUsers: (user) => dispatch(addUser(user)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)