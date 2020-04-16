<template>
  <footer class="align-normal">
    <div class="container d-flex border-top flex-align-center">
      <slot></slot>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'NavFooter',
};
</script>

<style lang="scss" scoped>
footer {
  margin: 0;
  padding: 0;
}
</style>
