<template>
  <div class="row">
    <h3 class="title flow-text">Редактировать книгу</h3>
    <p class="subtitle flow-text">
      Здесь вы можете ознакомится с содержимым вашей книги и отредактировать её
    </p>
    <form class="col s12" @submit.prevent="updateBook">
      <div class="row">
        <div class="input-field col s6">
          <input v-model="book.title" id="book_title" type="text" class="validate" required>
          <label for="book_title" class="active">Название книги</label>
        </div>
        <div class="input-field col s6">
          <input v-model="book.author" id="book_author" type="text" class="validate" required>
          <label for="book_author" class="active">Автор</label>
        </div>
      </div>
      <p class="text flow-text">Вы можете изменить жанры вашей книги</p>
      <div class="chips col s12" ref="chips"></div>
      <button type="submit" class="btn waves-effect waves-light">Обновить</button>
      <button type="button" class="btn waves-effect waves-light red darken-4"
      @click="bookDelete">Удалить</button>
    </form>
  </div>
  <ul class="pagination">
    <li :class="{active: item.id === book.id}" v-for="item of getSortedBooks" v-bind:key="item.id">
      <router-link :to="{ name: 'editBook', params: { id: item.id }}">
        {{ getSortedBooks.indexOf(item) + 1 }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import M from 'materialize-css';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'editBook',
  data() {
    return {
      book: {
        id: +this.$route.params.id,
        title: '',
        author: '',
        genres: [],
      },
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    ...mapActions(['editBook', 'deleteBook']),
    updateBook() {
      this.editBook(this.book);
    },
    bookDelete() {
      this.$router.push({ name: 'booksList' });
      this.deleteBook(this.book.id);
    },
    refresh() {
      if (this.getSortedBooks.some((item) => item.id === +this.$route.params.id)) {
        const chips = M.Chips;
        const genres = Array.from(this.genres);
        chips.init(this.$refs.chips, {
          placeholder: 'Введите жанры',
          secondaryPlaceholder: 'Введите жанры',
          data: genres,
          onChipAdd: (c) => {
            const tags = c[0].M_Chips.chipsData.map((item) => item.tag);
            this.book.genres = tags;
          },
          onChipDelete: (c) => {
            const tags = c[0].M_Chips.chipsData.map((item) => item.tag);
            this.book.genres = tags;
          },
        });
        this.book = { ...this.bookFound };
      }
    },
  },
  computed: {
    ...mapGetters(['findBookById', 'getBookGenres', 'getSortedBooks']),
    bookFound() { return this.findBookById(+this.$route.params.id); },
    genres() { return this.getBookGenres(this.book.id); },
  },
  watch: {
    $route() {
      this.refresh();
    },
  },
};
</script>

<style scoped>
  button {
    margin-top: 50px;
  }
  button:last-of-type {
    margin-left: 15px;
  }
  .title {
    margin-bottom: 40px;
  }
  .subtitle {
    margin-bottom: 50px;
  }
  .pagination {
    margin-top: 50px;
  }
  .chips {
    margin-top: 50px;
  }
</style>
