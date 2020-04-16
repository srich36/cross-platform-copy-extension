<template>
  <footer class="align-normal">
    <div class="container d-flex border-top flex-align-center">
      <a class="nav-item" id="copy-nav-link">
        <i class="fas fa-copy nav-icon" id="copy-nav"></i>
      </a>
      <a class="nav-item" id="paste-nav-link">
        <i class="fas fa-paste nav-icon" id="paste-nav"></i>
      </a>
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

.nav-item {
  flex: 1;
  border-right: 0.5px solid #dadada;
  text-align: center;
  font-size: 2rem;
}

.nav-icon {
  padding: 0.2rem 1.25rem;
}

.nav-icon.active {
  border-bottom: 2px solid rgb(255, 114, 39);
}
</style>
