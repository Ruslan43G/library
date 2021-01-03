import { createStore } from 'vuex';
import books from '../utils/constants';

export default createStore({
  state: {
    books: {
      books,
      sort: null,
      filter: null,
    },
  },
  mutations: {
    addBook: (state, newBook) => state.books.books.push({ ...newBook, id: Date.now() }),
    updateBook: (state, {
      id, title, author, genres,
    }) => {
      const index = state.books.books.findIndex((book) => book.id === id);
      state.books[index] = {
        ...state.books[index], title, author, genres,
      };
    },
    delBook: (state, id) => {
      state.books.books = state.books.books.filter((book) => book.id !== id);
    },
    setFilter: (state, filter) => { state.books.filter = filter; },
    setSort: (state, sort) => { state.books.sort = sort; },
  },
  actions: {
    createBook: ({ commit }, newBook) => commit('addBook', newBook),
    editBook: ({ commit }, data) => commit('updateBook', data),
    deleteBook: ({ commit }, id) => commit('delBook', id),
    setBookFilter: ({ commit }, value) => commit('setFilter', value),
    setBookSort: ({ commit }, value) => commit('setSort', value),
  },
  getters: {
    getAllBooks: (state) => state.books.books,
    getAllGenres: (state, getters) => {
      const arr = getters.getAllBooks.slice(0).map((b) => b.genres);
      return Array.from(new Set([].concat(...arr)));
    },
    getAllTitles: (state, getters) => getters.getAllBooks.map((book) => book.title),
    getAllAuthors: (state) => Array.from(new Set(state.books.books.map((b) => b.author))),
    findBookById: (state, getters) => (id) => getters.getSortedBooks.find((b) => b.id === id),
    getBookGenres: (state, getters) => (id) => getters.getSortedBooks.find((book) => book.id === id)
      .genres.map((g) => ({ tag: g })),
    getFilteredBooks: (state, getters) => {
      const filteredBooks = getters.getAllBooks.slice(0);
      if (!state.books.filter) {
        return filteredBooks;
      }
      if (getters.getAllAuthors.includes(state.books.filter)) {
        return filteredBooks.filter((book) => book.author === state.books.filter);
      }
      if (getters.getAllGenres.includes(state.books.filter)) {
        return filteredBooks.filter((book) => book.genres.includes(state.books.filter));
      }
      if (getters.getAllTitles.includes(state.books.filter)) {
        return filteredBooks.filter((book) => book.title === state.books.filter);
      }
      return filteredBooks;
    },
    getSortedBooks(state, getters) {
      const sortedBooks = getters.getFilteredBooks.slice(0);
      if (state.books.sort === 'author') {
        return sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
      }
      if (state.books.sort === 'title') {
        return sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
      }
      if (getters.getAllGenres.includes(state.books.sort)) {
        return sortedBooks.sort((a, b) => {
          if (a.genres.includes(state.books.sort) && b.genres.includes(state.books.sort)) {
            return 0;
          }
          if (a.genres.includes(state.books.sort) && !b.genres.includes(state.books.sort)) {
            return -1;
          }
          if (!a.genres.includes(state.books.sort) && b.genres.includes(state.books.sort)) {
            return 1;
          }
          return 0;
        });
      }
      return sortedBooks;
    },
  },
});
