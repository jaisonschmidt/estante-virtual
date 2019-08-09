<template>
    <div>
        
        <header-main />
        <banner-full title="Login" subtitle="Área do usuário" />
        
        <div class="loginFormContainer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12">
                        
                        <login-form />

                        <div class="text-center well well-sm containerNewAccount">
                            <router-link to="/signup">Não tem cadastro? Crie sua conta agora!</router-link>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>

        <footer-main />

    </div>
</template>

<style lang="scss" scoped>

.containerNewAccount {
    margin-top: 40px;
}

.loginFormContainer {
    margin: 40px auto 0;
    max-width: 600px;
}

</style>


<script>

import HeaderMain from '@/components/HeaderMain'
import BannerFull from '@/components/BannerFull'
import LoginForm from '@/components/LoginForm'
import FooterMain from '@/components/FooterMain'

export default {
    name: "login",
    components: {
        HeaderMain,
        BannerFull,
        LoginForm,
        FooterMain
    }
}

</script>

