<template>
    <div>

        <!-- Book List Component -->
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="page-header">
                        <h2>{{ title }}</h2>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-md-3" v-for="book in books" v-bind:key="book.id">
                    <book-default :book="book" :showDetailButton="showDetailButton" :showStatus="showBookStatus" />
                </div>
            </div>
        </div>

        <div class="modal fade" tabindex="-1" role="dialog" id="mdlOpenPreview">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title">Informações sobre o livro</h4>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-xs-4">
                                    <img :src="bookPreview.image" v-bind:alt="bookPreview.name" class="img-responsive">
                                </div>
                                <div class="col-xs-8">
                                    <div class="well well-sm">
                                        {{ bookPreview.name }}
                                    </div>

                                    <div>
                                        <button type="button" class="btn btn-primary" @click.prevent="bookLoan(bookPreview)">
                                            Reservar livro
                                        </button>
                                    </div>

                                </div><!-- /.col-xs-8 -->
                            </div>
                        </div>
                    </div> <!-- /.modal-body -->
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
                    </div>

                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
        
    </div>
</template>

<script>

import Vue from 'vue'; 
import BookDefault from '@/components/BookDefault.vue'

/**
 * Book List
 * description: render a book list
 */
export default {
    name: 'BookList',
    data: function(){
        return {
            bookPreview: { // used to preview a specific book
                default: () => ({
                    name: "",
                    image: ""
                }),
                type: Object
            }
        }
    },
    props: {
        title: String, // title of the section book list
        books: Array, // array of books to render
        showDetailButton: { // show or hide the details button
            default: false,
            type: Boolean
        },
        showBookStatus: { // show or hide if a book is loan or not
            default: false,
            type: Boolean
        }
    },
    methods: {
        openPreview: function(book){ // open preview modal
            this.bookPreview = book;
            $('#mdlOpenPreview').modal('show')
        },
        bookLoan: function(book){ // used to loan a book
            
            // loanBook
            this.$store.dispatch('Book/loanBook', book)
                .then((ret) => {
                    if(ret.status) { 

                        $('#mdlOpenPreview').modal('hide')

                        Vue.notify({
                            group: 'general',
                            title: 'Sucesso!',
                            type: 'success',
                            text: 'Você reservou este livro com sucesso!'
                        })

                        this.$router.push('/memberarea') // redirect to the member area
                        
                    }
                })
                .catch(err => console.log(err))
        }
    },
    components: {
        BookDefault
    }
}
</script>
