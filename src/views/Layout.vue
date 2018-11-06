<template>
    <div>
        <todo-navbar> </todo-navbar>
        <div class="main-content">
            <router-view>  </router-view>
        </div>
        
        <div class="navbar-container">

            <div class="navbar-container-left">
                <img src="logo.png" class="logotipo" alt="logotipo">
            </div>

            <div class="navbar-container-right">
                <a class="logincolor" href="log-in.html">Log in</a>
            </div>

        </div>
        
        

    </div>
</template>

<script>

import Navbar from '@/components/NavBar.vue'

export default {
    components: {
        'todo-navbar': Navbar,
    }

    
}
</script>

<style>
    .main-content {
        background: red;
        width: 100%;
        height: calc(100vh - 80px);
        
    }
</style>


