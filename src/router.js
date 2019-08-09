import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

var router = new Router({
    routes: [{
            path: '/', // pagina inicial
            name: 'home',
            meta: {
                title: 'Estante Virtual'
            },
            component: () =>
                import ('./views/Home.vue'),

        },
        {
            path: '/login', // pagina de login
            name: 'login',
            meta: {
                title: 'Login'
            },
            component: () =>
                import ('./views/Login.vue')
        },
        {
            path: '/signup', // pagina de login
            name: 'signup',
            meta: {
                title: 'Cadastre-se'
            },
            component: () =>
                import ('./views/Signup.vue')
        },
        {
            path: '/registernewbook', // pagina de login
            name: 'registerNewBook',
            meta: {
                title: 'Cadastrar novo livro',
                requiresAuth: true
            },
            component: () =>
                import ('./views/RegisterNewBook.vue')
        },
        {
            path: '/memberarea', // pagina de login
            name: 'memberArea',
            meta: {
                title: 'Cadastrar novo livro',
                requiresAuth: true
            },
            component: () =>
                import ('./views/MemberArea.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title

    if (to.matched.some(record => record.meta.requiresAuth)) {

        if (store.getters['User/user'] != false) {
            next()
            return
        }

        next('/login')
        Vue.notify({
            group: 'general',
            title: 'Acesso negado',
            type: 'warn',
            text: 'Faça login para acessar esta área.'
        })
    } else {
        next()
    }
})

export default router;