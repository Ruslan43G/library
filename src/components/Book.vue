<template>
    <tr @click="route">
      <td>{{ book.author }}</td>
      <td>{{ book.title }}</td>
      <td>{{ book.genres[0] }}</td>
    </tr>
</template>

<script>
export default {
  props: ['book'],
  methods: {
    route() {
      this.$router.push(`/edit/:id${this.$props.book.id}`);
    },
  },
};
</script>

<style>

</style>
