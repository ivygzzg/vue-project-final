<template>
    <div>
    <navbar> </navbar> 
  

    <ul v-for="(item, index) in list" :key="index">
        <li>{{item}}</li>
    </ul>

    <button @click="addItem()">Añadir elemento</button>



    <div class="squares">
    <div class="square">

        


        
        <!-- <el-button type="primary" icon="el-icon-search">Search</el-button> -->

              <el-table
    :data="tableData3"
    style="width: 100%">
    <el-table-column type="expand">
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
      <template slot-scope="props">
        <p>subnotas: {{ props.row.state }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="no"
      prop="nooo">
    </el-table-column>
    <el-table-column
      label=""
      prop="Titulo">
    </el-table-column>
  </el-table>
    </div>
    <div class="square-1">
          <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>

    

     <p class="ocultar">Ocultar Tablero</p>

    </div>
    </div>
    </div>




</template>

<script>
import navbar from "@/components/NavBar.vue"
export default {

    // data() {    
    //    return {value1: '',}

    //     },



     data() {
      return {
          list: [],
        tableData3: [{
          subnotas: '',
         
        }, {
          subnotas: '',
         
        }, {
          subnotas: '',
        }, {
          
          subnotas: '',
        }, {
        
          subnotas: '',
          
        }, {
        
          subnotas: '',
         
        }, {
         
          subnotas: '',
         
        }]
      }
    },

     components: {

        navbar
    },
    methods: {
        addItem() {
            this.list.push({
                title: 'Tarea',
                date: ''
            })
        }
    }
}
</script>

<style>

    .squares {
        display: flex;
        justify-content: center;
    }

    .square {
        height: 500px;
        width: 600px;
        background:white;
        margin-right: 15px;
        margin-top:  15px;
        box-shadow: 4px 5px 20px rgba(69, 74, 83, 0.74);
    }

      .square-1 {
        height: 500px;
        width: 600px;
        background:white;
        margin-top:  15px;
        box-shadow: 4px 5px 20px rgba(69, 74, 83, 0.74);
        /* display: flex; */

    }

    .ocultar {
  
    }

    
    
</style>
