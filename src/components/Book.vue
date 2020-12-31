<template>
    <tr>
      <td @click.self="openPage" class="hoverable">{{ book.author }}</td>
      <td>{{ book.title }}</td>
      <td>{{ book.genres.join(', ') }}</td>
      <td><button @click.self="delBook"
            type='button' class="waves-effect waves-light btn-small">&times;</button></td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['book', 'filteredBooks'],
  methods: {
    ...mapActions(['deleteBook']),
    openPage() {
      this.$router.push({ name: 'editBook', params: { id: this.book.id } });
    },
    delBook() {
      this.deleteBook(this.book.id);
    },
  },
};
</script>

<style scoped>
  .hoverable {
    cursor: pointer;
  }
</style>
