<template>
    <div>
      <nav-app v-if="this.$route.path !== '/login'"></nav-app>   
      <sidebar-app></sidebar-app> 
    </div>
</template>
 
<script>
import navApp from "./components/navApp.vue";
import sideBarApp from "./components/sideBarApp.vue";
import homeView from "./components/homeView.vue";
import nasabahView from "./components/nasabahView.vue";

export default {
  components: {
    "nav-app": navApp,
    "sidebar-app": sideBarApp,
    "home-view": homeView,
    "nasabah-view":nasabahView
  }
};
</script>
 
<style scoped>
</style> 