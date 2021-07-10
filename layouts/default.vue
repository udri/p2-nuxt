<template>
  <div class="page-container">
    <external-imports />
    <div class="header-container">
      <md-tabs class=" md-elevation-10">
        <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
        <md-tab id="tab-about" md-label="About" to="/about"></md-tab>
      </md-tabs>
    </div>
    <Nuxt />
    <div class="footer-container">
      <md-bottom-bar class="md-elevation-10">
        <p>footer stuff</p>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
import Externals from '../components/ExternalImports.vue';

export default {
  components: {
    'external-imports': Externals
  }
}
</script>

<style>
.footer-container {
  position: fixed;
  width: 100%;
  bottom: 0px;
}
</style>
