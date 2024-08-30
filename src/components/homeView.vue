<template>
    <div id="setting">
       <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-3">Selamat Datang {{name}}</h1>
          <p class="lead">Aplikasi Keuangan Vujak, This App Made by Vue Js Framework And Laravel Rest API </p>
        </div>
      </div>
    </div>
</template>
 
<script>
export default {
data() {
  return{
    name: localStorage.getItem('name'),
  }
}
}
</script>
 
<style scoped>
#setting {
  margin-top: 50px;
  margin-left: 43px;
}
</style> 