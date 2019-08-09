import Vue from 'vue'
import Vuex from 'vuex'

import Book from './Book/store/' // manage book api interactions
import User from './User/store/' // manage user api interactions

Vue.use(Vuex)

const modules = {
    Book,
    User
}

export default new Vuex.Store({
    modules
})