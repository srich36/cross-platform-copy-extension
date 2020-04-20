<template>
  <div class="d-flex-column align-normal">
    <textarea v-model="copyText" id="copy-input" class="mx-1rem h-50 mt-1rem flex-shrink-1" type="text-area" placeholder="Copy Text Here" ref="copytext"></textarea>
    <button class="mt-2 mx-1rem mb-4 align-normal button-margin" id="submit-button" @click="syncText">
      Sync Text
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CopyPage',
  data() {
    return {
      copyText: '',
    };
  },
  methods: {
    ...mapActions({
      aSyncText: 'SYNC_COPY',
    }),
    focusTextArea() {
      this.$refs.copytext.focus();
    },
    async syncText() {
      let loader;
      try {
        loader = this.$loading.show({
          // Optional parameters
          container: this.fullPage ? null : this.$refs.formContainer,
          loader: 'dots',
        });
        await this.aSyncText(this.copyText);
        loader.hide();
      } catch (e) {
        loader.hide();
      }
    },
  },
  mounted() {
    this.focusTextArea();
    document.execCommand('paste');
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
  height: 75%;
  min-height: 100px;
}

.mt-2 {
  margin-top: 0.75rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.align-normal {
  align-items: normal;
}
</style>

<style>
.button-margin {
  border-radius: 1rem;
}

.flex-shrink-1 {
  flex-shrink: 1;
}
</style>
