<template>

<div class="bienvenido" >
    <h1 class="texto" >
        Hola Ivonne!
    </h1>
    <p class="texto-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  <br>
     Inventore autem laborum aliquid nam laudantium ratione modi, voluptatibus <br>
      excepturi veniam officia.</p>

      <div class="main-button">
                <button class="button" @click.prevent="submit()">Empieza Hoy</button>
      </div>

      <p class="aprende">Aprende más</p>


            
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
        </el-carousel-item>
  </el-carousel>
      

</div>
</template>

<script scoped>

import info3 from "@/assets/info3.png"

export default {

     data() { 

    return {
            info3
    }
},

  methods:{
        submit() {
            console.log("si presione")
            this.$router.push("/Inicio") 
           
        },

    }

}
</script>

<style>

  *{
    margin: 0%;
    padding: 0%;
    box-sizing: 0%;


    
    
}

.bienvenido {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100vh;
}

.button {

        color: white;
        background-color: rgb(232, 45, 100);
        font-family: 'value';
        border-radius: 5px;
        border: solid rgb(232, 45, 100);
        padding: 5px 100px;
        font-size: 2em;
        box-shadow: 4px 5px 20px rgb(46, 50, 56);
        margin-top: 60px; 
        }

.texto{
    font-family: value;
    font-size: 7em;
    color: blue;
    margin-top: 350px;
}


.texto-1{
    color: grey;
    margin-top: 40px;
    font-size: 1.5em;
    font-family: montserrat-light;
}


.aprende {
    margin-top: 40px;
}

.el-carousel {
    overflow: none;
}

.el-carousel__container {
    width: 500px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>


