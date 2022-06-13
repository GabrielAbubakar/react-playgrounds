export const addUser = (user) => {
    return {
        type: 'users/addedUser',
        payload: user
    }
}