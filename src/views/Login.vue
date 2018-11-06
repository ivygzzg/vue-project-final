<template>

     <div class ="container">

                    <!-- <router-link to="/">
                        <img :src="flecha" id="flecha" alt="simbolo">
                    </router-link> -->

                    <div class="header">
                        <h1 class="text">Log In</h1>
                    </div>

                    <form class="form">

                        <div class="input-group">
                            
                            <input class="input" placeholder="Usuario" type="name">

                        </div>

                        <div class="input-group">
                            
                            <input class="input" placeholder="Contraseña" type="Password">

                        </div>
                        
                        <a href="#" class="forget" >Forgot your password?</a>

                       
                        <div><button class="button" @click.prevent="submit()">enter</button></div>
                        



                    </form>       
                
    </div>

</template>


<script scoped>

import flecha from "@/assets/flecha.png"

export default {

    data() {    
        return {
            flecha
        }

         return {
            button
        }
    },
    
    methods:{
        submit() {
            console.log("si presione")
            this.$router.push("/Bienvenido") 
           
        },

    }

}

</script>

<style scoped>
    
    .container {

        display: flex;
        background: white;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column;

  }

  .input {
      border-color: blue;
      border-radius: 20px;
      padding: 10px;
      font-size: 14px;
      width: 300px;
    margin-bottom: 30px;
      
  }


    .input::placeholder {
        color: #686868;
        text-align: center;
    }


   .a.forget {
       text-align: center;
   }

.button {

        color: white;
        background-color: rgb(232, 45, 100);
        font-family: 'value';
        border-radius: 5px;
        border: solid rgb(232, 45, 100);
        padding: 5px 130px;
        font-size: 1.5em;
        box-shadow: 4px 5px 20px rgb(46, 50, 56);
        margin-top: 30px; 
        }

</style>



// USAR PLACEHOLDER