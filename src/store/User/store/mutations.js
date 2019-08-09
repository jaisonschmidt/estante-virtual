export default {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, user) {
        state.user = user
    },
    auth_error(state) {
        state.user = false
    },
    logout(state) {
        state.user = false
    }
}