<template>
  <div class="page-container">

    <div class="header-container">
      <md-tabs class=" md-elevation-10">
        <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
        <md-tab id="tab-about" md-label="About" to="/about"></md-tab>
        <md-tab id="tab-admin" md-label="Admin" to="/admin"></md-tab>
      </md-tabs>
    </div>

    <div class="md-layout md-gutter md-alignment-center">
      <Nuxt />
    </div>

    <div class="footer-container">
      <md-bottom-bar class="md-elevation-10">
        <p>footer stuff</p>
      </md-bottom-bar>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer-container {
  position: fixed;
  width: 100%;
  bottom: 0px;
}
</style>
