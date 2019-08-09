const SET_LIST = (state, obj) => {
    state.bookList = obj.bookList
}

const NEW_BOOK = (state, obj) => {
    // caso necessite atualizar o state com o livro novo
    state.newBook = obj
}

const UPDATE_BOOK = (state, obj) => {
    state.lastBookLoan = obj
}

export default {
    SET_LIST,
    NEW_BOOK,
    UPDATE_BOOK
}