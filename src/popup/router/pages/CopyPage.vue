<template>
  <div class="d-flex-column align-normal">
    <textarea id="copy-input" class="mx-1rem h-50 mt-1rem" type="text-area" placeholder="Copy Text Here"></textarea>
    <button class="mt-2 mx-1rem mb-4 align-normal" id="submit-button">
      Sync Text
    </button>
  </div>
</template>

<script>
export default {
  name: 'CopyPage',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
textarea {
  border-radius: 0.4rem;
}

textarea:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.h-50 {
  height: 50%;
  min-height: 100px;
}

.mt-2 {
  margin-top: 0.75rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
