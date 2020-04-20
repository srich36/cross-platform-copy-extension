<template>
  <!-- Icons just do no rerender reactively when their class is 
  updated so we put the active class on the link instead -->
  <a class="nav-item" :class="activeClass" @click="emitClick">
    <i :class="[iconClass]"></i>
  </a>
</template>

<script>
export default {
  name: 'FooterTab',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    iconClass: {
      type: String,
      default: 'fa fas',
    },
  },
  computed: {
    activeClass() {
      return this.active ? ' active' : '';
    },
  },
  methods: {
    emitClick($event) {
      this.$emit('clicked', $event.currentTarget);
    },
  },
};
</script>

<style>
.nav-item {
  flex: 1;
  border-right: 0.5px solid #dadada;
  text-align: center;
  font-size: 2rem;
  box-sizing: border-box;
  height: 100%;
}

.nav-icon {
  padding: 0.2rem 1.25rem;
}

.nav-item.active {
  border-bottom: 4px solid rgb(255, 114, 39);
}
</style>
