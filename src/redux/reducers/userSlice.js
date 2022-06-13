const initialState = {
    users: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'users/addedUser': {
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            }
        }
        default:
            return state
    }

}

export default rootReducer;