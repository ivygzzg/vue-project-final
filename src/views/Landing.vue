<template>
  <div class="landing">

  <navbar> </navbar> 

    <section class="main">

        <div class="container-main">


            <div class="text">
                <h1 class="text-style">Lorem ipsum dolor sit amet <br> consectetur adipiscing </h1>
                
                <!-- <img :src="fondo" id="fondo" alt="simbolo"> -->
                
            </div>
            <div class="text-1">
                <p class="style-p">Lorem ipsum dolor sit amet</p>
            </div>



            <div class="main-button">
                <button class="button-main" @click.prevent="submit()">Suscribete</button>
            </div>

            <div class="main-link">
                <p>Aprende Más</p>
            </div>

            <div class="main-flecha">
                  <img :src="flecha" id="flecha" alt="simbolo">
            </div>

            
            

        </div>

    </section>


    <section class="container">

        <div class="organiza-cantainer">
            <img :src="info1" id="info1" alt="simbolo">
        <div class="imagen-container">
                <h2>Lorem ipsum dolor.</h2>
                <p class="text-organiza">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <div class="organiza-1">
            <img :src="indo2" id="indo2" alt="grafico">
            <div class="imagen-container">
                <h2>Lorem ipsum dolor.</h2>
                <p class="text-organiza-1">Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </div>
        </div>

        <div class="organiza-2">
            <img :src="info3" id="info3" alt="grafico">
            <div class="imagen-container-2">
                <h2>Lorem ipsum dolor.</h2>
                <p class="text-organiza-2">Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </div>
        </div>

        
    </section>


    <ivonne-footer></ivonne-footer>

     
  </div>

  


</template>

<script scoped>
import fondo from "@/assets/background.png"
import navbar from "@/components/NavBar.vue"
import flecha from "@/assets/flecha.png"
import info1 from "@/assets/info1.png"
import indo2 from "@/assets/indo2.png"
import info3 from "@/assets/info3.png"
import footer from "@/components/Footer.vue"


export default {
    data() {    
        // return {
        //     fondo
        // }

        return {
            flecha, info1, indo2, info3
        }

    },



     methods:{
        submit() {
            console.log("si presione")
            this.$router.push("/registro") 
           
        },


    },

    components: {

        navbar, 'ivonne-footer': footer
    }
    
}
</script>


<style scoped>

  *{
    margin: 0%;
    padding: 0%;
    box-sizing: 0%;

        
    
}

    .landing {
        background-image: url("../assets/background.png");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: contain;
        
    }


   




.main{

    height: 100vh;
    
}

.container-main{
    position: relative;

}


#simbolo{

    position: absolute;
    display: flex;
    margin-top: -55px;
}
.text{

    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 100px;
    color: white;
    
}

.text-style{

    font-size: 2.5em;
    font-family: value;
    line-height: 1em;
    letter-spacing: 0.02em;
    z-index: 1;
}

.text-1{
    display: flex;
    justify-content: center;
    color: white;
    padding-top: 7px;




}

.style-p{

    font-family: montserrat-light;
    font-size: 1.8em;
    z-index: 1;

}

.main-link{
    display: flex;
    justify-content: center;
    padding-top: 80px;
    color: white;
    font-family: montserrat-light;
}

.main-button{
    display: flex;
    justify-content: center;
    padding-top: 100px;
}

.button-main{
    color: white;
    background-color: rgb(232, 45, 100);
    font-family: 'value';
    border-radius: 5px;
    border: solid rgb(232, 45, 100);
    padding: 10px 70px;
    font-size: 1.5em;
    box-shadow: 4px 5px 20px rgb(16, 64, 151);
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;

}

.button-main:hover,.form button:active,.form button:focus {
           background: rgb(243, 61, 115);
           border: solid rgb(243, 61, 115);
        }








.container{
    height: 1200px;
    padding-top: 120px;
    position: relative;
}

 .organiza-cantainer{
    display: flex;
    background: white;
    align-items: center;
    box-shadow: 10px 10px 80px  rgb(15, 45, 100);
    border-radius: 5px;
    margin-bottom: 100px;
    height: 230px;
    
    

}
#no{
    height: 278px;
    margin-left: -25px;
    margin-bottom: -17px;
}

.imagen-container{
    flex: auto;
}

h2{
    font-size: 2em;
    font-family: value;
    color: blue;
    
}

.text-organiza{
    font-size: 1.05em;
    font-family: montserrat-light;
    padding-right: 50px;
    

    
}
   
.main-flecha{
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

#flecha{
    height: 20px;
}


/*segunda imagen*/

 .organiza-1{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    background: white;
    box-shadow: 10px 10px 80px;
    border-radius: 5px;
    margin-bottom: 100px;
    height: 230px;
    
}

#no-1{
    height: 278px;
    margin-right: -25px;
    margin-bottom: -17px;
}

.imagen-container{
  margin-left: 50px;
}

h2{
    font-size: 2em;
    font-family: value;
    
}

.text-organiza-1{
    font-size: 1.05em;
    font-family: montserrat-light;
    
   
   
}


 .organiza-2{
    display: flex;
    align-items: center;
    background: white;
    box-shadow: 10px 10px 80px;
    border-radius: 5px;
    margin-bottom: 100px;
    height: 230px;
    
    

}

.imagen-container-2{
    margin-left: 50px;
}


#no-2{
    height: 278px;
    margin-left: -25px;
    margin-bottom: -17px;

}

h2{
    font-size: 2em;
    font-family: value;
    
}

.text-organiza-2{
    font-size: 1.05em;
    font-family: montserrat-light;
    
   
   
}


.button-footer{
   width: 100%;
   color: white;
   background-color: rgb(232, 45, 100);
   font-family: 'value';
   border-radius: 5px;
   border: solid rgb(232, 45, 100);
   padding: 10px 70px;
   font-size: 1.5em;
   box-shadow: 4px 5px 20px rgb(16, 64, 151);
}

</style>

