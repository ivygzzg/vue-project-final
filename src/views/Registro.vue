<template>

    <div class ="container">

        <!-- <router-link to="/">
            <img :src="flecha" id="flecha" alt="simbolo">
        </router-link> -->

        <div class="header">
            <h1 class="text">Crear tu Cuenta</h1>
        </div>

                    <form class="form">

                        <div class="input-group">
                            
                            <input class="input" placeholder="Nombre" type="name">

                        </div>

                        <div class="input-group">
                            
                            <input class="input" placeholder="Email" type="Password">

                        </div>

                         <div class="input-group">
                            
                            <input class="input" placeholder="Constraseña" type="Password">

                        </div>

                         <div class="input-group">
                            
                            <input class="input" placeholder="Confirmar Contraseña" type="Password">

                        </div>

                        <div class="forget" >
                        <a href="#">Forgot your password?</a>
                        </div>
                        
                        <div>
                            <button class="button" @click.prevent="submit()">enter</button>
                        </div>

                        <router-link to="/">
                        <img :src="info1" id="info1" alt="simbolo">
                    </router-link>

                    </form>   

                    <modal width ="80%" height = "600px" name ="confirmacion">
                    <!-- <modal name="confirmacion" class="modal-tamaño" wid> -->
                       
                       <div class="confirmacion-modal">

                            <h1 class="confirmar-texto">Confirma tu correo</h1>
                            <el-button @click="aceptar" type="primary" round >aceptar</el-button>

                    </div>
                    
                          
                  
                    
                   
                    
                    

                

                    </modal>
    </div>

</template>


<script>

import flecha from "@/assets/flecha.png"
import info1 from "@/assets/info1.png"

export default {

    data() {    
        return {
            info1
        }
    },
    methods:{
        submit() {
            console.log("si presione")
            this.$modal.show("confirmacion") 
           
        },

        aceptar(){
             this.$router.push("/landing")
        }

    }
    
}
</script>

<style scoped>
    
    .container {

        display: flex;
        background: white;
        justify-content: left;
        align-items: center;
        width: 100%;
        flex-direction: column;
        /* transition: transform 0.5s ease;
        transform: translate3d(100%, 0, 0); */ 

  }

  /* .container.is-visible {
  transform: translate3d(0, 0, 0);
} */

.header {
    margin-top:40px; 
}

  .form {
      display: flex;
        justify-content: left;
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


    .forget {
        display: flex;
        justify-content: center;
    }
    .button {

        color: white;
        background-color: rgb(232, 45, 100);
        font-family: 'value';
        border-radius: 5px;
        padding: 5px 130px;
        font-size: 1.5em;
        box-shadow: 4px 5px 20px rgb(46, 50, 56);
        margin-top: 30px; 
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
        }

        .button:hover,.form button:active,.form button:focus {
           background: rgb(243, 61, 115);
           border: solid rgb(243, 61, 115);
        }



      .confirmacion-modal {
          background: blue;
          height: inherit;
          width: inherit;
          display: flex;
          justify-content: center;
          flex-direction: column;
      }


        .confirmar-texto {
            font-size: 4rem;
            color: white;
       
    }

    .boton-modal{
        background-color: white;
        width: 40px;
    }
        


    </style>



    // USAR PLACEHOLDER