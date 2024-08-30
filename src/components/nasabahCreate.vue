<template>
    <div id="setting">
          <div class="row">
            <div class="col-12">
              <h2>Input Nasabah</h2><hr>
              <form>
                <div class="form-group">
                  <label for="Tanggal Lahir">Tanggal Lahir</label>
                  <input type="date" class="form-control form-control-sm" placeholder="Tanggal Lahir" v-model="income.tanggal_lahir">
                </div>
                <div class="form-group">
                  <label for="Nomor Identitas">Nomor Identitas</label>
                  <input type="number" min="0" class="form-control form-control-sm" placeholder="Nomor Identitas" v-model="income.nomor_identitas">
                </div>
                <div class="form-group">
                  <label for="Nama">Nama</label>
                  <input type="text" min="0" class="form-control form-control-sm" placeholder="Nama" v-model="income.nama">
                </div>
                <div class="form-group">
                  <label for="Tempat Lahir">Tempat Lahir</label>
                  <input type="text" min="0" class="form-control form-control-sm" placeholder="Tempat Lahir" v-model="income.tempat_lahir">
                </div>
                <div class="form-group">
                  <label for="Jenis Kelamin">Jenis Kelamin</label><br/>
                  <input
                    type="radio"
                    id="laki-laki"
                    value="L"
                    v-model="income.jenis_kelamin"
                  />
                  <label for="laki-laki">Laki-laki (L)</label>
                  <input
                    type="radio"
                    id="wanita"
                    value="W"
                    v-model="income.jenis_kelamin"
                  />
                  <label for="wanita">Wanita (W)</label>
                </div>
                <div class="form-group">
                  <label for="Nominal Setoran">Nominal Setoran</label>
                  <input type="number" min="0" class="form-control form-control-sm" placeholder="Nominal Setoran" v-model="income.nominal_setor">
                </div>
                <div class="form-group">
                  <label for="Pekerjaan">Pekerjaan</label>
                  <select class="form-control form-control-sm" placeholder="Pilih Pekerjaan" v-model="income.pekerjaan">
                    <option value="">Pilih Pekerjaan</option>
                    <option v-for="pekerjaan in pekerjaanList" :key="pekerjaan.id" :value="pekerjaan.nama_pekerjaan">
                      {{ pekerjaan.nama_pekerjaan }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="Provinsi">Provinsi</label>
                  <select class="form-control form-control-sm" placeholder="Pilih Provinsi" v-model="income.provinsi">
                    <option value="">Pilih Provinsi</option>
                    <option v-for="provinsi in provinsiList" :key="provinsi.id" :value="provinsi.name">
                      {{ provinsi.name }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="Alamat">Alamat</label>
                  <textarea 
                    class="form-control form-control-sm" 
                    placeholder="Alamat" 
                    v-model="income.alamat"
                    rows="3">
                  </textarea>
                </div>

                <button class="btn btn-primary btn-sm" v-on:click.prevent="createNasabah">Submit</button>                
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
        tanggal_lahir: new Date().toISOString().substring(0, 10),
        nominal_setor: null,
        nomor_identitas:"",
        tempat_lahir:"",
        nama:"",
        jenis_kelamin:"",
        pekerjaan:'',
        alamat:""
      },
      provinsiList: [],
      pekerjaanList: []
    };
  },
  methods: {
    createNasabah : function() {
      let self = this;
      axios
        .post("http://localhost:8000/api/nasabah", qs.stringify(this.income))
        .then(    
          function (response) {            
            response => this.income = response.data;
            alert("data has been inserted");
            self.$router.push({name: 'nasabahView'});
          }    
        )
        .catch(error => console.log(error));
    },
    loadProvinsi: function () {
      let self = this;
      axios
        .get("http://localhost:8000/api/wilayah/provinsi")
        .then(function (response) {
          self.provinsiList = response.data.data;
        })
        .catch(error => console.log(error));
    },
    loadPekerjaan: function () {
      let self = this;
      axios
        .get("http://localhost:8000/api/pekerjaan")
        .then(function (response) {
          self.pekerjaanList = response.data.data;
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.loadProvinsi();
    this.loadPekerjaan();
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