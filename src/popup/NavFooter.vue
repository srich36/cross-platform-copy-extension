<template>
  <footer class="align-normal footer-bottom w-100 d-flex">
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

/* This will keep the footer at the bottom while not blocking off
any posts because sticky keeps allowing the scrolling. Sticky is a
pretty weird css property  */
.footer-bottom {
  position: sticky;
  bottom: 0;
}
.w-100 {
  width: 100%;
}
</style>
