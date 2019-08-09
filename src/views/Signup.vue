<template>
    <div>
        <header-main />
        <banner-full title="Cadastro" subtitle="Crie sua conta agora!" />
        
        <div class="signupFormContainer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12">
                        
                        <signup-form />

                        <div class="text-center well well-sm containerLogin">
                            <router-link to="/login">Já possui conta? Faça login!</router-link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <footer-main />
    </div>
</template>

<style lang="scss" scoped>

.containerLogin {
    margin-top: 40px;
}

.signupFormContainer {
    margin: 40px auto 0;
    max-width: 600px;
}

</style>


<script>

import HeaderMain from '@/components/HeaderMain'
import BannerFull from '@/components/BannerFull'
import SignupForm from '@/components/SignupForm'
import FooterMain from '@/components/FooterMain'

export default {
    name: "signup",
    components: {
        HeaderMain,
        BannerFull,
        SignupForm,
        FooterMain
    }
}

</script>
