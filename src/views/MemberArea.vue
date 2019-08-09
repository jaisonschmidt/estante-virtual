<template>
    <div>
        <header-main />
        <banner-full title="Área do Usuário" subtitle="Gerencie seus livros e empréstimos." />
        
        <!-- livros que tenho por devolver -->
        <book-list title="Livros por devolver" v-if="myLoanBooks.length > 0" :books="myLoanBooks" />
        
        <!-- meus livros -->
        <book-list title="Meus livros" :books="myBooks" v-if="myBooks.length > 0" :showBookStatus="true" />
        
        <div class="container" v-else>
            <div class="row">
                <div class="col-xs-12">

                    <div class="page-header">
                        <h2>Meus livros</h2>
                    </div>

                    <div class="alert alert-info text-center">
                        Você ainda não cadastrou livros :-(<br>
                        <router-link to="/registernewbook">Cadastrar livro</router-link>
                    </div>

                </div>
            </div>
        </div>
        

        <footer-main />
    </div>
</template>
<script>

import HeaderMain from '@/components/HeaderMain'
import BannerFull from '@/components/BannerFull'
import BookList from '@/components/BookList'
import FooterMain from '@/components/FooterMain'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'memberArea',
  components: {
    HeaderMain,
    BannerFull,
    BookList,
    FooterMain
  },
  computed: {
    ...mapState('Book', ['bookList']),
    ...mapGetters('Book', ['availableBooksList']),
    ...mapGetters('Book', ['myBooks']),
    ...mapGetters('Book', ['myLoanBooks'])
  },
  mounted() {
    this.setList()
  },
  methods: {
    ...mapActions('Book', ['setList'])
  }
}
</script>
