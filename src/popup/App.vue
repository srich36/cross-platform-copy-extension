<template>
  <div>
    <Alert :display="alertDisplay" :success="alertSuccess" :text="alertText"></Alert>
    <router-view> </router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Alert from './Alert';

export default {
  name: 'App',
  components: {
    Alert,
  },
  data() {
    return {};
  },
  computed: mapState({
    alertDisplay: state => state.alert.display,
    alertSuccess: state => state.alert.success,
    alertText: state => state.alert.text,
  }),
  watch: {
    alertDisplay(currentDisplay, oldDisplay) {
      if (currentDisplay) {
        const timeout = setTimeout(() => this.$store.commit('STOP_ALERT'), 2500);
        console.log(timeout);
        this.$store.commit('SET_ALERT_TIMEOUT_HANDLE', timeout);
      }
    },
  },
};
</script>

<style>
body {
  min-height: 600px;
  min-width: 400px;
}

.vh-100 {
  height: 100vh;
}
</style>
