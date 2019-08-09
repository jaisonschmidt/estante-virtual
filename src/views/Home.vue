<template>
  <div>    
      <header-main />
      <banner-full />
      <book-list title="Livros Disponíveis" :books="availableBooksList" :showDetailButton="true" />
      <book-list title="Livros Emprestados" :books="unavailableBooksList" />
      <footer-main />
  </div>
</template>

<script>

import Vue from 'vue'

import HeaderMain from '@/components/HeaderMain'
import BannerFull from '@/components/BannerFull'
import BookList from '@/components/BookList'
import FooterMain from '@/components/FooterMain'

import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    HeaderMain,
    BannerFull,
    BookList,
    FooterMain
  },
  computed: {
    ...mapState('Book', ['bookList']),
    ...mapGetters('Book', ['availableBooksList']),
    ...mapGetters('Book', ['unavailableBooksList']),
    user : function(){ return this.$store.getters['User/user'] }
  },
  mounted() {
    this.setList()

    if( this.user == false ){
        Vue.notify({
            group: 'general',
            title: 'Seja bem-vindo!',
            type: 'warn',
            text: 'Faça login para poder reservar livros!'
        })
    }

  },
  methods: {
    ...mapActions('Book', ['setList'])
  }
}
</script>
