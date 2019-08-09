import axios from 'axios'

export default {
    login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')

            axios({ url: `http://localhost:3000/users?email=${user.email}&password=${user.password}`, method: 'GET' })
                .then(resp => {

                    if (resp.data.length > 0) {
                        const user = resp.data[0]

                        localStorage.setItem('userEstante', JSON.stringify(user))

                        commit('auth_success', user)
                        resolve({ status: true, user })
                    } else {
                        resolve({ status: false })
                    }

                })
                .catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('userEstante')
                    reject(err)
                })

        })
    },
    signup({ commit }, user) {
        return new Promise((resolve, reject) => {
            console.log('novo usuario', user)
            axios({ url: `http://localhost:3000/users`, data: user, method: 'POST' })
                .then(() => {
                    resolve({ status: true })
                })
                .catch(err => {
                    commit('newuser_error')
                    reject(err)
                })

        })
    },
    logout({ commit }) {
        return new Promise((resolve) => {
            commit('logout')
            localStorage.removeItem('userEstante')
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    }
}