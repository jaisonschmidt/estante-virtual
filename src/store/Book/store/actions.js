import axios from 'axios'
import store from '@/store'

const setList = async({ commit }) => {
    const bookList = (await axios.get('http://localhost:3000/books')).data
    commit('SET_LIST', { bookList })
}

const registerNewBook = function signup({ commit }, newBook) {

    return new Promise((resolve, reject) => {
        axios({ url: `http://localhost:3000/books`, data: newBook, method: 'POST' })
            .then(() => {
                commit('NEW_BOOK', { newBook })
                resolve({ status: true })
            })
            .catch(err => {
                reject(err)
            })

    })

}

const loanBook = function signup({ commit }, book) {

    return new Promise((resolve, reject) => {

        var data = new Date();
        var dataFormatada = data.getFullYear() + "-" + ("0" + (data.getMonth() + 1)).substr(-2) + "-" + ("0" + data.getDate()).substr(-2);

        book.loan = {
            userId: store.getters['User/user'].id,
            date: dataFormatada
        }

        axios({ url: `http://localhost:3000/books/${book.id}`, data: book, method: 'PUT' })
            .then(() => {
                commit('UPDATE_BOOK', { book })
                resolve({ status: true })
            })
            .catch(err => {
                reject(err)
            })

    })

}

const getBackBook = function signup({ commit }, book) {

    return new Promise((resolve, reject) => {

        book.loan = false

        axios({ url: `http://localhost:3000/books/${book.id}`, data: book, method: 'PUT' })
            .then(() => {
                commit('UPDATE_BOOK', { book })
                resolve({ status: true })
            })
            .catch(err => {
                reject(err)
            })

    })

}

export default {
    setList,
    registerNewBook,
    loanBook,
    getBackBook
}