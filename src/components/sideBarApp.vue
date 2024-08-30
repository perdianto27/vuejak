<template>
      <div id="navbar"> 
        <div class="container-fluid">
            <div class="row d-flex d-md-block flex-nowrap wrapper">
                <div v-if="this.$route.path !== '/login'" class="col-md-2 float-left col-1 pl-0 pr-0 collapse width show" id="sidebar">
                     <div class="list-group border-0 card text-center text-md-left">
                        <router-link to="/home" href="#" class="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i><icon name="home" scale="1"></icon></i><span class="d-none d-md-inline">HOME</span></router-link>
                        <router-link to="/nasabah/view" href="#" class="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i><icon name="plus" scale="1"></icon></i><span class="d-none d-md-inline">NASABAH</span></router-link>
                     </div>
                </div>
                <div class="col-md-10 float-left col px-5 pl-md-2 pt-2 main"> 
                  <router-view></router-view>               
                </div>
            </div>
        </div>
      </div> 
    
</template>
 
<script>


export default {
    components:{       
  }
};
</script>
 
<style scoped>
#sidebar {
  overflow: hidden;
  z-index: 3;
}

#sidebar .list-group {
  min-width: 400px;
  background-color: #333;
  min-height: 100vh;
}

#sidebar i {
  margin-right: 8px;
}

#sidebar .list-group-item {
  border-radius: 0;
  background-color: #333;
  color: #ccc;
  border-left: 0;
  border-right: 0;
  border-color: #2c2c2c;
  white-space: nowrap;
}

#sidebar .list-group-item:not(.collapsed) {
  background-color: #222;
}

#sidebar .list-group .list-group-item[aria-expanded="false"]::after {
  content: " \f0d7";
  font-family: FontAwesome;
  display: inline;
  text-align: right;
  padding-left: 5px;
}

@media (max-width: 768px) {
  #sidebar {
    min-width: 35px;
    max-width: 40px;
    overflow-y: auto;
    overflow-x: visible;
    transition: all 0.25s ease;
    transform: translateX(-45px);
    position: fixed;
  }

  #sidebar.show {
    transform: translateX(0);
  }

  #sidebar::-webkit-scrollbar {
    width: 0px;
  }

  #sidebar,
  #sidebar .list-group {
    min-width: 35px;
    overflow: visible;
  }
  /* overlay sub levels on small screens */
  #sidebar .list-group .collapse.show,
  #sidebar .list-group .collapsing {
    position: relative;
    z-index: 1;
    width: 190px;
    top: 0;
  }
  #sidebar .list-group > .list-group-item {
    text-align: center;
    padding: 0.75rem 0.5rem;
  }
  /* hide caret icons of top level when collapsed */
  #sidebar .list-group > .list-group-item[aria-expanded="true"]::after,
  #sidebar .list-group > .list-group-item[aria-expanded="false"]::after {
    display: none;
  }
}

.collapse.show {
  visibility: visible;
}
.collapsing {
  visibility: visible;
  height: 0;
  -webkit-transition-property: height, visibility;
  transition-property: height, visibility;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.collapsing.width {
  -webkit-transition-property: width, visibility;
  transition-property: width, visibility;
  width: 0;
  height: 100%;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
</style> 