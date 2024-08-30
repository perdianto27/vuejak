<template>
    <div id="login">
      <h1>Login</h1>
        <p v-if='feedback' class='text-danger'>{{feedback}}</p>
        <div class="form-group">
            <input type="text" class="form-control form-control-sm" placeholder="Email" v-model="login.email">
        </div>
         <div class="form-group">
            <input type="password" class="form-control form-control-sm" placeholder="Password" v-model="login.password">
        </div>
        <button class="btn btn-primary btn-sm" v-on:click.prevent="userlogin">Login</button>                
    </div>
</template>
 
<script>
import axios from "axios";
import qs from "qs";

export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      feedback: null
    };
  },
  created(){
    if(this.$route.path == '/login'){
      localStorage.clear();
    }
  },
  methods: {
    userlogin: function() {
      if (this.login.email != "" && this.login.password != "") {
        let self = this;
        axios
          .post(
            "http://localhost:8000/api/user/login",
            qs.stringify(this.login)
          )
          .then(function(response) {
            if (response.data.data) {
              let currentToken = "vuejak";
              localStorage.setItem("token", currentToken);
              localStorage.setItem("email", response.data.data.email);
              localStorage.setItem("name", response.data.data.name);
              localStorage.setItem("role_id", response.data.data.role_id);
              self.$router.push({
                name: "homeView"
              });
            } else {
              self.feedback = "Login Gagal !!!";
              self.login.email = "";
              self.login.password = "";              
            }
          })
          .catch(error => console.log(error));
      } else {
        this.feedback = "Email dan Password tidak boleh kosong !!!";
      }
    }
  }
};
</script>
 
<style scoped>
#login {
  margin: 500px;
  border: 1px solid #cccccc;
  background-color: #f8f9fa;
  margin: auto;
  margin-top: 200px;
  margin-left: 250px;
  padding: 20px;
}
</style> 