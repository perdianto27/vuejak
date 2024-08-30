<template>
    <div id="setting">
        <div class="row">
            <div class="col-10 text-left"> 
              <h3>Nasabah</h3>       
                
            </div>
            <div class="col-2 text-right"> 
              <router-link class="btn btn-sm btn-info" :to="{name:'nasabahCreate'}">
                  Add Nasabah
              </router-link>                     
            </div>

        </div>
        <hr>
        
        <v-client-table :data="incomes" :columns="columns" :options="options">
            <div slot="action" slot-scope="props">
              <router-link
                v-if="canShowApproveButton"
                class="btn btn-sm btn-success"
                :to="{ name: 'nasabahApprove', params: { id: props.row.id } }"
              >
                Approve
              </router-link>
            </div>
        </v-client-table>                     
    </div>
</template>
 
<script>
import axios from "axios";

export default {
  data() {
    return {
      incomes: [],
      columns: [
        "nomor_identitas",
        "nama",
        "pekerjaan",
        "nominal_setor",
        "status_pengajuan",
        "action"
      ],
      options: {
        perPage: 5,
        perPageValues: [5, 10, 15, 20, 25],
        sortable: ["nama", "nominal_setor"],
        filterable: ["nama", "nomor_identitas"]
      }
    };
  },
  methods: {
    loadincomes: function() {
      axios
        .get("http://localhost:8000/api/nasabah")
        .then(response => (this.incomes = response.data.data))
        .catch(error => console.log(error));
    }
  },
  created() {
    this.loadincomes();
  },
  computed: {
    canShowApproveButton() {
      return localStorage.getItem('role_id') !== 'CS';
    }
  }
};
</script>
 
<style>
#setting {
  margin-top: 5px;
  margin-left: 43px;
}

.VueTables__search-field label {
  justify-content: left;
}

td {
  text-align: center;
}

th {
  text-align: center;
}
</style>     