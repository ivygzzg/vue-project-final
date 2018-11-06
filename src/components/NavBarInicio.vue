<template>
    <header class="navbar">

    <div class="navbar-container">        
       
       <router-link to="/Landing">
                <img :src="logo" id="logo" alt="simbolo">
        </router-link>

        <div class="navbar-container-right">
            <router-link to="/login">
                Log in
            </router-link>
        </div>

    </div>

    </header>
</template>

<script>

import logo from "@/assets/logo.png"
export default {
       data() {    
        return {
            logo
        }
    },

    
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


