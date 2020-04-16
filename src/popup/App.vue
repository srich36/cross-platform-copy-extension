<template>
  <div class="d-flex d-flex-column">
    <CompanyHeader companyName="Cross Copy" logoPath="../icons/crosscopy.png"></CompanyHeader>
    <main>
      <router-view></router-view>
    </main>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import CompanyHeader from './CompanyHeader';
import NavFooter from './NavFooter';

export default {
  components: {
    CompanyHeader,
    NavFooter,
  },
  data() {
    return {};
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}

main {
  min-width: 200px;
}

.d-flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.d-flex .flex-end {
  align-self: flex-end;
}

.d-flex .flex-start {
  align-self: flex-start;
}

.d-flex {
  display: flex;
}

.d-flex.flex-center {
  justify-content: center;
}

.d-flex.flex-align-center {
  align-items: center;
}

h1 {
  font-family: 'Menlo', monospace;
  font-size: 22px;
  font-weight: 400;
  margin: 0;
}

.border-bottom {
  border-bottom: 0.5px solid #dadada;
}

.border-top {
  border-top: 0.5px solid #dadada;
}

.text-center {
  text-align: center;
}

.container {
  width: 100%;
}

button {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 0.2rem;
  padding: 0.3rem 0.8rem;
}

button:hover {
  outline: 0;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}

.align-normal {
  align-self: normal;
}

.mx-1rem {
  margin-left: 1rem;
  margin-right: 1rem;
}

.mt-1rem {
  margin-top: 1rem;
}
</style>
