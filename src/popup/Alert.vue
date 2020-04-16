<template>
  <transition name="fade">
    <div :class="getClassName">
      {{ text }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    text: {
      type: String,
      default: 'Alert text',
    },
    display: {
      type: Boolean,
      default: true,
    },
    success: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    getClassName() {
      return this.success ? 'alert alert-success' : 'alert alert-danger';
    },
  },
};
</script>

<style>
.alert {
  --alert-width: 90%;
  position: absolute;
  top: 0;
  left: 0;
  width: var(--alert-width);
  margin-left: calc((100% - var(--alert-width)) / 2);
  margin-right: calc((100% - var(--alert-width)) / 2);
  text-align: center;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-sizing: border-box;
  margin-top: 0.2rem;
  font-weight: 550;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-danger {
  background-color: #f2dede;
  color: #a94442;
  border-color: 3px solid #ebcccc;
}

/* #alert-container {
  display: none;
  transition-property: display;
} */

/* Classes automatically wrapped in a vue transition */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.1s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.75s;
  opacity: 0;
}
</style>
