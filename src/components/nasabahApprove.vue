<template>
    <div id="setting">
          <div class="row">
            <div class="col-12">
              <h2>Approve Nasabah</h2><hr>
              <form>
                <div class="form-group">
                  <label for="notes">Notes</label>
                  <input type="text" class="form-control form-control-sm" placeholder="Notes" v-model="income.notes">
                </div>
                <button class="btn btn-primary btn-sm" v-on:click.prevent="editNasabah">Submit</button>                
              </form>
            </div>
          </div>
    </div>
</template>
 
<script>
import axios from "axios";
import qs from "qs";

export default {
  data() {
    return {
      income:{
        id: this.$route.params.id,
        updated_by:'',
        notes:'',  
      }
    };
  },
  methods: {
    loadNasabah : function(id) {
       axios
        .get("http://localhost:8000/api/nasabah/"+id)
        .then(response => this.income = response.data.data)
        .catch(error => console.log(error));
    },
     editNasabah : function(id) {
      self = this;
      this.income.updated_by = localStorage.getItem('name');
      axios
        .post("http://localhost:8000/api/nasabah/"+this.$route.params.id, qs.stringify(this.income))
        .then(    
          function (response) {            
            response => this.income = response.data;
            alert("data has been approved");
            self.$router.push({name: 'pemasukanView'});
          }    
        )
        .catch(error => console.log(error));
    }
  },
  mounted() {
    const {id} = this.$route.params;
    this.loadNasabah(id);
  },
  computed: {
    
  }

  }

</script>
 
<style>
#setting {
  margin-top: 5px;
  margin-left: 43px;
}
</style>     