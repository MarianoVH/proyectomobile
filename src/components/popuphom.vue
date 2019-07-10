<template> 
    <v-dialog max-width="90vw">
        <v-btn  icon flat slot="activator" @click="passinfo" ><v-icon color="green lighten-1">info</v-icon></v-btn>


        <v-card text-xs-center >
            
                    
            

    <v-card flat width="90%" class="man colorcard  " >
      <v-layout row wrap class="display">
        
        <v-flex xs12 >
            
            <v-card-title class="justify-center ">
                <h2> infoHome.teamA  </h2>  
 
                <h2> infoHome.teamB  </h2>  
 
            </v-card-title>   
            <v-card-text >
                 
                <p class="parrafosInfo algo">Date: {{infoPup}}  </p>
                <p class="parrafosInfo">Location: infoHome.LOCATION</p> 
            </v-card-text>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card flat width="90%" class="man colorcard" >
      <v-layout row wrap class="display">
        
        <v-flex xs12 text-xs-center>
          
            <v-card-text  >
                <p class="parrafosInfo3">Location Map</p>

            </v-card-text>
        </v-flex>
      </v-layout>
    </v-card>

        </v-card>

    </v-dialog> 
</template>


<script>
export default {

    props: ['infoPup'], 
    
}
</script>
<style scoped> 
    .errorinfo{
        color:white;
        background:black;
        border-radius: 5px;
        padding: 5px;
    }

    .colorcard{
        background-color: rgb(238,238,238 );
        border-radius: 5px;
    } 

    .parrafosInfo {
            
      background-color: #03a9f4;
      color:white;
      padding: 5px;
      border-radius: 5px; 
      text-align: center;
    }

    .parrafosInfo3{
            
      background-color: #03a9f4;
      color:white;
      padding: 5px;
      border-radius: 5px; 
    } 

</style>
