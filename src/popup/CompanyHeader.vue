<template>
  <div class="text-center container border-bottom py-2">
    <div class="d-flex flex-center flex-align-center">
      <img class="img-logo" :src="logoPath" />
      <h1 class="pl-2">
        {{ companyName }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyHeader',
  props: {
    companyName: {
      type: String,
      default: 'Default Company Name',
    },
    logoPath: {
      type: String,
      default: 'icons/crosscopy.png',
    },
  },
};
</script>

<style></style>

<style scoped>
.img-logo {
  width: 30px;
}

.py-2 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.pl-2 {
  padding-left: 0.4rem;
}
</style>
