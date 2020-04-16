<template>
  <div>
    <Alert :display="display" :success="false" text="Test"></Alert>
    <router-view> </router-view>
  </div>
</template>

<script>
import Alert from './Alert';

export default {
  name: 'App',
  components: {
    Alert,
  },
  data() {
    return {
      display: true,
    };
  },
  mounted() {
    setInterval(() => (this.display = !this.display), 1000);
  },
};
</script>

<style>
body {
  min-height: 250px;
  min-width: 225px;
}

.vh-100 {
  height: 100vh;
}
</style>
