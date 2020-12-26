<template>
  <table class="responsive-table highlight">
        <thead>
          <tr>
              <th>Автор</th>
              <th>Заголовок</th>
              <th>Жанр</th>
          </tr>
        </thead>
        <tbody>
          <Book v-bind:book="book" v-for="book of allBooks" v-bind:key="book.id"/>
        </tbody>
        <p>Всего книг: {{ allBooks.length}}, Всего авторов: {{ countAuthors(allBooks) }}</p>
      </table>
</template>

<script>
import { mapGetters } from 'vuex';
import Book from '../components/Book.vue';

export default {
  components: {
    Book,
  },
  methods: {
    countAuthors(books) {
      return Array.from(new Set(books.map((b) => b.author))).length;
    },
  },
  computed: mapGetters(['allBooks']),
};
</script>

<style>

</style>
