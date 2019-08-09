<template>
    <div>
        <header-main />
        <banner-full title="Novo livro" subtitle="Cadastre um novo livro para compartilhar!" />
        
        <div class="signupFormContainer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12">
                        
                        <book-form />

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
import BookForm from '@/components/BookForm'
import FooterMain from '@/components/FooterMain'

export default {
    name: "registerNewBook",
    components: {
        HeaderMain,
        BannerFull,
        BookForm,
        FooterMain
    }
}

</script>
