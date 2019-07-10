<template>
   <div>
    
    <v-card flat width="90vw" class="man">
      <v-layout row wrap class="borders">
        
        <v-flex xs12 >
          
            <h2 class="infomatch black--text"> {{arrayAux.division}}  Division</h2>
            <v-btn  icon @click="changeDisplay"> <v-icon>done</v-icon>  </v-btn>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card flat width="90vw" class="man mt-5" height="90vh">
      <v-layout row wrap  >
        
        <v-flex xs12 >
            
          <h2 class="titlematchs"> List of Games Division 1 </h2>
                     
          
                <div v-for="(game,index) in arrayAux.games" :key="index">


              <v-card flat width="90%" class="man colorgooglediv">
                <v-layout row wrap mb-3>
                  <v-flex>
                    <div class="googlewrapper">
                      <h2 class="googletitle font-weight-light">{{game.teamA}}</h2> 
                    
                    </div>
                  </v-flex>
                </v-layout>
              </v-card>
                
                </div>

        </v-flex>
      </v-layout>
    </v-card>

   </div>
</template>

<script>
export default {

  props: ["arrayAux"],
  data() {
    return {

    };
  },
  methods: { 
    changeDisplay(){
      this.$emit('changeDisplay','none') 
    }
  }
};
</script>

<style scoped>
 

  .titlematchs {
    font-size: 30px;
    text-align: center;
    margin-top: 5px;
  } 
   
</style>