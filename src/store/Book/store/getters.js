import store from '@/store'

const availableBooksList = state => state.bookList.filter((book) => {
    return book.loan == false
})

const unavailableBooksList = state => state.bookList.filter((book) => {
    return book.loan != false
})

const myBooks = state => state.bookList.filter((book) => {
    return book.userId == store.getters['User/user'].id
})

const myLoanBooks = state => state.bookList.filter((book) => {
    return book.loan != false && book.loan.userId == store.getters['User/user'].id
})

export default {
    availableBooksList,
    unavailableBooksList,
    myBooks,
    myLoanBooks
}