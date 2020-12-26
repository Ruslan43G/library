<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input v-model="book.title" id="book_title" type="text" class="validate">
          <label for="book_title">Заголовок</label>
        </div>
        <div class="input-field col s6" @click="c">
          <input id="book_author" type="text" class="validate">
          <label for="book_author">Автор</label>
        </div>
      </div>
      <div class="chips" ref="chips"></div>
    </form>
  </div>
</template>

<script>
import M from 'materialize-css';
import { mapGetters } from 'vuex';

export default {
  name: 'editBook',
  mounted() {
    M.Chips.init(this.$refs.chips, {
      placeholder: 'Введите жанры',
    });
  },
  computed: {
    ...mapGetters(['findBookById']),
    book() { return this.findBookById(+this.$route.params.id.substring(3)); },
  },
};
</script>

<style>

</style>
