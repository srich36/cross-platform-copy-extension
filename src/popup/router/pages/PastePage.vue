<template>
  <div class="d-flex d-flex-column align-items-center">
    <p v-for="(post, index) in posts" :key="index" class="flex-grow-1">{{ post.text }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'PastePage',
  computed: mapState({
    posts: state => state.posts,
  }),
  methods: {
    ...mapActions({
      aGetPosts: 'GET_POSTS',
    }),
  },
  mounted() {
    console.log('Mounted');
    this.aGetPosts();
  },
};
</script>

<style>
.flex-grow-1 {
  flex-grow: 1;
}

.justify-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}
</style>
