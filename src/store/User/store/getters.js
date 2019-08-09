export default {
    isLoggedIn: state => (state.user != false) ? true : false,
    user: state => state.user
}