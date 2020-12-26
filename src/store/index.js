import { createStore } from 'vuex';
import books from '../utils/constants';

export default createStore({
  state: {
    books,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    allBooks: (state) => state.books,
    findBookById: (state) => (id) => state.books.find((b) => b.id === id),
  },
});
