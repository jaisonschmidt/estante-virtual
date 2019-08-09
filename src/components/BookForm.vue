<template>
    <div>
        <form @submit.prevent="registerNewBook">

            <div class="alert alert-warning text-center">
                Todos os campos são de preenchimento obrigatório.
            </div>

            <div class="form-group">
                <label for="txtName">Título do livro *</label>
                <input v-model="newBook.name" type="text" class="form-control" id="txtName" placeholder="Ex. JavaScript Básico" maxlength="250" required>
            </div>

            <div class="form-group">
                <label for="txtImage">URL da imagem *</label>
                <input v-model="newBook.image" type="url" class="form-control" id="txtImage" placeholder="Ex. http://exemplo.com/img.jpg" required>
            </div>

            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    </div>
</template>

<script>

    import Vue from 'vue'; 

    /**
     * Book Form
     * description: register a new book, can be used for update a register
     */
    export default {
        name: 'BookForm',
        data: function(){
            return {
                newBook: { // book object
                    name: "",
                    image: "",
                    userId: null,
                    loan: false
                }
            }
        },
        methods: {
            registerNewBook: function(){ // called to register a new book
                
                this.newBook.userId = this.$store.getters['User/user'].id // get the logged user id

                this.$store.dispatch('Book/registerNewBook', this.newBook) // register a new book
                    .then((ret) => {
                        if(ret.status) {

                            Vue.notify({ // send a notification to the user
                                group: 'general',
                                title: 'Sucesso!',
                                type: 'success',
                                text: 'Novo livro cadastrado com sucesso!'
                            })

                            this.$router.push('/memberarea') // redirect user to the memberarea
                        }
                    })
                    .catch(err => console.log(err))
            }
        }
    }

</script>

