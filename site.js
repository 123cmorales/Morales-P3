/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
         title : 'IMDB + Chris’s Top 8 Movies',
         owner : 'Chris',
         url: 'https://github.com/123cmorales/NJIT-3_StarterFiles-master',
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
      }
})

vue_app.mount("#vue_app")

// const app = Vue.createApp({
//       // data, functions
//       //template: '<h2>I am the ONE WHO KNOCKS</h2>'
//       data(){
//           return {
//               url: 'https://netninja.dev/',
//               showBooks: true,
//               books: [
//                   {title: 'wow', author: 'bobby', img: 'img/JimmyValmer.png', isFav: true},
//                   {title: 'eric', author: 'Cartman', img: 'img/KennyMcCormick.png', isFav: false },
//                   {title: 'Jimmy', author: 'Timmah', img: 'img/Timmy.webp', isFav: true},
//               ]
//               // title: 'I am Heisenberg',
//               // author: 'Walter Heartwell White',
//               // age: 52,
//               // x: 0,
//               // y: 0
//           }
//       },
//       methods: {
//           toggleShowBooks () {
//               this.showBooks = !this.showBooks
//           },
//           toggleFav(book) {
//               book.isFav = !book.isFav
//           }
//           // handleEvent(e, data) {
//           //     console.log(e, e.type)
//           //     if (data) {
//           //         console.log(data)
//           //     }
//           // },
//           // handleMousemove(e) {
//           //     this.x = e.offsetX
//           //     this.y = e.offsetY
//           // }
//           //changeTitle(abc) {
//             // this.title = 'Los Pollos Hermanos'
//             //this.title = abc;
//           //}
//       },
//       computed: {
//           filteredBooks(){
//               return this.books.filter((book) => book.isFav)
//           }
//       }
//   });
  
//   app.mount('#app')