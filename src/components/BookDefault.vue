<template>
    <div class="thumbnail">

        <div class="statusLabel" v-if="showStatus">
            <span class="label label-success" v-if="book.loan!=false">Emprestado</span>
            <span class="label label-info" v-else>Disponível</span>
        </div>

        <img :src="book.image" v-bind:alt="book.name" class="bookImage">
        <div class="caption">

            <h5 class="bookName text-center">{{ book.name }}</h5>
            
            <p v-if="user && showDetailButton" class="text-center">
                <a href="#" class="btn btn-primary" @click.prevent="openPreview(book)" role="button">Detalhes</a>
            </p>
            
        </div>

        <div class="giveBackContainer" v-if="book.loan != false && user != false && book.loan.userId == user.id">
            <button class="btn btn-primary" @click.prevent="getBackBook(book)">
                <span class="glyphicon glyphicon-remove"></span>
                Devolver
            </button>
        </div>

    </div>
</template>

<script>

    import Vue from 'vue'

    /**
     * Book Component
     * description: render a unique book, show image, description and button interaction
     */
    export default {
        name: 'BookDefault',
        computed : {
            user : function(){ return this.$store.getters['User/user'] }
        },
        props: {
            book: Object, // object book
            showDetailButton: { // show or hide button detail
                default: false,
                type: Boolean
            },
            showStatus: { // show or hide if a book is loan
                default: false,
                type: Boolean
            }
        },
        methods: {
            openPreview: function(book){ // open preview modal
                this.$parent.openPreview(book);
            },
            getBackBook: function(book) { // loan a book, called by the loan button

                this.$store.dispatch('Book/getBackBook', book)
                    .then((ret) => {
                        if(ret.status) { 

                            Vue.notify({ // send a notification to the user
                                group: 'general',
                                title: 'Livro devolvido',
                                type: 'success',
                                text: 'O livro foi devolvido, obrigado!'
                            })

                            this.$router.push('/memberarea')  // redirect the user to the home
                            
                        }
                    })
                    .catch(err => console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>

.thumbnail {
    border-radius: 0;
    padding-top: 20px;
    transition: all linear .3s;
    position: relative;

    &:hover {
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    }

}

.statusLabel {
    position: absolute;
    right: 0px;
    top: 0px;
}

.giveBackContainer {
    left: 0;
    margin-bottom: 12px;
    position: absolute;
    top: 0;
}

.bookImage {
    margin: 0 auto;
    height: 150px;
}

.bookName {
    height: 32px;
    overflow: hidden;
}

</style>
