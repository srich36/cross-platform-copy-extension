<template>
  <div>
    <Alert :display="true" :success="false" text="Test"></Alert>
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
