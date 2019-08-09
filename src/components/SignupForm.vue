<template>
    <div>

        <form @submit.prevent="register">

            <div class="alert alert-warning text-center">
                Todos os campos são de preenchimento obrigatório.
            </div>

            <div class="form-group">
                <label for="txtName">Nome *</label>
                <input v-model="name" type="text" class="form-control" id="txtName" placeholder="Informa seu nome" maxlength="100" required>
            </div>

            <div class="form-group">
                <label for="txtEmail">E-mail *</label>
                <input v-model="email" type="email" class="form-control" id="txtEmail" placeholder="Informe seu e-mail" maxlength="200" required>
            </div>

            <div class="form-group">
                <label for="txtPassword">Senha *</label>
                <input v-model="password" type="password" class="form-control" id="txtPassword" placeholder="Senha" maxlength="50" required>
            </div>

            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
        
    </div>
</template>

<script>
    import Vue from 'vue'; 
    
    /**
     * Signup Form Component
     * description: register new users
     */
    export default {
        name: 'SignupForm',
        data() {
          return {
            name: "",
            email: "",
            password: ""
          };
        },
        methods: {
         /**
         * Register Method
         * description: register new users
         */
          register: function() {
            
            let user = {
              name: this.name,
              email: this.email,
              password: this.password
            };

            this.$store.dispatch('User/signup', user)
                .then((ret) => {
                    if(ret.status) { 

                        Vue.notify({
                            group: 'general',
                            title: 'Sucesso!',
                            type: 'success',
                            text: 'Cadastro realizado com sucesso. Faça login para reservar livros!'
                        })

                        this.$router.push('/login') 
                        
                    }
                })
                .catch(err => console.log(err))

          }
        }
    }
</script>

