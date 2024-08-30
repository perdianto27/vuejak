<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            Aplikasi Vuejak
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>  
          <div>          
            <button class="btn btn-sm btn-outline-primary" type="button" v-on:click.prevent="logout">Logout</button>
          </div>      

        </div>

      </nav>
    </div>
</template>
 
<script>


export default {
  data() {
    return {

    }
  },
  methods: {
    logout: function() {
      localStorage.clear();
      this.$router.push({
          name: "login",
      });
    }
  }
}
</script>
 
<style scoped>
</style> 