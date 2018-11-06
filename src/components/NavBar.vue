<template>
    <header class="navbar">

    <div class="navbar-container">        
       
       <router-link to="/">
                <img @click="logo" id="logo" alt="simbolo">
        </router-link>

        <modal width ="80%" height = "600px" name ="log">
        
        <div class="navbar-container-right">
            <!-- <router-link to="/login"> -->
              <a href="Log in"></a>  
            <!-- </router-link> -->
        </div>

        </modal>

    </div>

    </header>
</template>

<script scoped>

import logo from "@/assets/logo.png"
export default {
       data() {    
        return {
            logo
        }
    },

  methods:{
        submit() {
            console.log("si presione")
            this.$modal.show("navbar-container-right") 
           
        },

        log(){
             this.$router.push("/landing")
        }

    }
    
}

</script>

<style scoped>

.navbar {
    height: 80px;
    width: 100%;
    background: #3104F6;
    /* background: transparent; */
    /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15); */
}

.navbar .navbar-container .navbar-container-left{
    float: left;
}

.navbar .navbar-container .navbar-container-left .logotipo{
    height: 30px;
}

.navbar .navbar-container .navbar-container-right{

    
    float: right;
    font-family: montserrat-light;
    font-size: 1em;

}

.navbar .navbar-container .navbar-container-right .logincolor{
    
    color: aliceblue;
}

</style>


