<template>
    <form @submit.prevent="login">

        <div class="alert alert-danger" v-if="alertError.show">
            {{ alertError.msg }}
        </div>

        <div class="form-group">
            <label for="txtEmail">E-mail</label>
            <input v-model="email" type="email" class="form-control" id="txtEmail" placeholder="Email" maxlength="200" required>
        </div>

        <div class="form-group">
            <label for="txtPass">Senha</label>
            <input v-model="password" type="password" class="form-control" id="txtPassword" placeholder="Senha" maxlength="50" required>
        </div>

        <button type="submit" class="btn btn-primary">Fazer Login</button>

    </form>
</template>

<script>
    import Vue from 'vue'; 

    /**
     * Login Form Component
     * description: form to authenticate user, composed by email and password fields
     */
    export default {
        name: 'LoginForm',
        data() {
          return {
            email: "Lucas_Santos@hotmail.com",
            password: "WiKnWDhHNrkOWYj",
            alertError: {
                msg : "Usuário não cadastrado ou a combinação de usuário e senha está incorreta.",
                show: false
            }
          };
        },
        methods: {
         /**
         * Login Method
         * description: authenticate user
         */
          login: function() {
            let email = this.email;
            let password = this.password;
            let alertError = this.alertError;

            this.$store.dispatch('User/login', { email, password })
                .then((ret) => {
                    if(ret.status == true) {

                        Vue.notify({
                            group: 'general',
                            type: 'success',
                            text: `Bem-vindo(a) ${ret.user.name}, reserve seus livros!`
                        })

                        this.$router.push('/memberarea');
                    } else {
                        Vue.notify({
                            group: 'general',
                            type: 'error',
                            title: 'Erro de login',
                            text: `Revise seu usuário e senha.`
                        })

                        alertError.show = true;
                    }
                })
                .catch(err => console.log(err))

          }
        }
    }
</script>

