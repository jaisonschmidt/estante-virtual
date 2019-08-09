<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link to="/" class="navbar-brand">Estante Virtual</router-link>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            
                <ul class="nav navbar-nav navbar-right">
                    <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
                    <li v-if="!isLoggedIn"><router-link to="/signup">Signup</router-link></li>

                    <li class="dropdown" v-if="isLoggedIn">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <span class="glyphicon glyphicon-user"></span>
                            Bem-vindo(a), {{ user.name }} <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link to="/memberarea">Área do usuário</router-link></li>
                            <li><router-link to="/registernewbook">Cadastrar livro</router-link></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#" @click="logout">Logout</a></li>
                        </ul>
                    </li>

                </ul>
                
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    /**
     * Header Main Component
     * description: header main, used in home and another general pages
     */
    export default {
        name: 'HeaderMain',
        computed : {
            isLoggedIn : function(){ return this.$store.getters['User/isLoggedIn'] },
            user : function(){ return this.$store.getters['User/user'] }
        },
        methods: {
            /**
             * Logout
             * description: do user logout and redirect then to the home
             */
            logout: function () {
                this.$store.dispatch('User/logout')
                .then(() => {
                    this.$router.push('/login')
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        border: transparent;
        border-radius: 0;
        margin-bottom: 0;
    }

    .navbar {
        background: $primary;
    }
</style>
