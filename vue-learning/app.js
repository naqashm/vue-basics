const app = Vue.createApp({
    data() {
        return {
            url: 'https://google.com',
            showBooks: true,
            title: 'The Final Empire',
            age: 18,
            books: [
                { title: 'name of wind1', author: 'patrick john1', isFav: true},
                { title: 'name of wind2', author: 'patrick john2', isFav: false},
                { title: 'name of wind3', author: 'patrick john3', isFav: true}
            ]
        }
    },
    methods: {
        changeTitle(title) {
           this.title = title 
        },
        toggleShowBooks() {
           this.showBooks = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')