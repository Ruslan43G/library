<template>
<div class="row">
  <h3>Список книг</h3>
  <p class="flow-text row s6 subtitle">Здесь представлен список книг в вашей библиотеке.
    Вы можете их отсортировать и отфильтровать по желанию</p>
  <div class="input-field col s6">
    <select ref="sort" v-model="sorted" @change="saveSortState(sorted)">
      <option value="" disabled selected>Выберите опцию</option>
      <option value="author">По автору</option>
      <option value="title">По названию</option>
      <optgroup label="По жанру">
        <option v-for="item of allGenres" v-bind:key="item.id" :value="item"> {{ item }}
        </option>
      </optgroup>
    </select>
    <label>Сортировать список</label>
    <button type="button" class="btn" @click="clearSortState">Сбросить</button>
  </div>
  <div class="input-field col s6">
    <select ref='filter' v-model="filter" @change="saveFilterState(filter)">
      <option value="" disabled selected>Выберите опцию</option>
      <optgroup label="По Автору">
        <option v-for="author of totalAuthors" v-bind:key="author.id" :value="author"> {{ author }}
        </option>
      </optgroup>
      <optgroup label="По Названию">
        <option v-for="title of totalTitles" v-bind:key="title.id" :value="title"> {{ title }}
        </option>
      </optgroup>
      <optgroup label="По жанру">
        <option v-for="item of allGenres" v-bind:key="item.id" :value="item"> {{ item }}
        </option>
      </optgroup>
    </select>
    <label>Фильтровать список</label>
    <button type="button" class="btn" @click="clearFilterState">Сбросить фильтр</button>
  </div>

  <table class="highlight col s12 responsive-table section">
    <thead>
      <tr>
          <th>Автор</th>
          <th>Заголовок</th>
          <th>Жанр</th>
          <th>Удалить</th>
      </tr>
    </thead>
    <tbody>
      <Book v-bind:book="book" v-for="book of getSortedBooks" v-bind:key="book.id"/>
    </tbody>
    <p class="left-align flow-text">
      Всего авторов: {{ filteredAuthors }}, произведений: {{ getSortedBooks.length}}
    </p>
  </table>
</div>
</template>

<script>
import M from 'materialize-css';
import { mapGetters, mapActions } from 'vuex';
import Book from '../components/Book.vue';

export default {
  data() {
    return {
      sorted: null,
      filter: null,
    };
  },
  components: {
    Book,
  },
  methods: {
    ...mapActions(['setBookFilter', 'setBookSort']),
    saveFilterState(value) {
      this.$router.push({ name: 'booksList', query: { ...this.$route.query, filter: value } });
      console.log(`onChange ${value}`);
    },
    saveSortState(value) {
      this.$router.push({ name: 'booksList', query: { ...this.$route.query, sort: value } });
      console.log(`onChange ${value}`);
    },
    clearFilterState() {
      this.saveFilterState(null);
      this.filter = null;
    },
    clearSortState() {
      this.saveSortState(null);
      this.sorted = null;
    },
  },
  computed: {
    ...mapGetters(['getAllBooks', 'getSortedBooks']),
    totalAuthors() {
      return Array.from(new Set(this.getAllBooks.map((b) => b.author)));
    },
    totalTitles() {
      return this.getAllBooks.map((b) => b.title);
    },
    allGenres() {
      const arr = this.getAllBooks.slice(0).map((b) => Array.from(b.genres));
      return Array.from(new Set([].concat(...arr)));
    },
    filteredAuthors() {
      return Array.from(new Set(this.getSortedBooks.map((b) => b.author))).length;
    },
  },
  mounted() {
    M.FormSelect.init(this.$refs.sort, {
    });
    M.FormSelect.init(this.$refs.filter, {
    });
    if (this.$route.query.filter) {
      this.filter = this.$route.query.filter;
    }
    if (this.$route.query.sort) {
      this.sorted = this.$route.query.sort;
    }
  },
  watch: {
    filter: function checkFilter(newValue) {
      this.setBookFilter(newValue);
    },
    sorted: function checkSorted(newValue) {
      this.setBookSort(newValue);
    },
  },
};
</script>

<style scoped>
  h3 {
    text-align: center;
    margin: 0 0 30px 0;
  }

  button {
    margin-top: 15px;
  }

  .subtitle {
    max-width: 60%;
  }

</style>
