<template>
  <div >
    <v-card>
      <v-toolbar color="light-blue" dark> 

        <v-toolbar-title>Match Information</v-toolbar-title>
        <v-spacer></v-spacer>  
                        
      </v-toolbar>

      <div >

        <v-list three-line > 
          <v-list-tile> 
            <v-list-tile-content>
              <v-list-tile-title class="text-xs-center">   Location: <span class="font-weight-light">{{informacionGame.location}}</span></v-list-tile-title>
              
              <v-list-tile-title class="text-xs-center">   Date: <span class="font-weight-light">{{gameDisplayData.time}} - {{informacionGame.date}}</span></v-list-tile-title>
             
              <v-list-tile-title class="text-xs-center">   Result: <span > <v-icon color="red">highlight_off</v-icon> The season has not started</span></v-list-tile-title>

               <v-list-tile-title class="text-xs-center">   Scorers: <span > <v-icon color="red">highlight_off</v-icon> The season has not started</span></v-list-tile-title>

            </v-list-tile-content> 
            
          </v-list-tile> 
        </v-list> 
      </div>


    </v-card>
  </div>
</template>


<script>

export default {
  props: ["gameDisplayData", "informacionGame"], 
  data() {
    return {
      content: [],
      mensajes:[],
      showComments: false,
      leaveComment: "Leave a comment!",
      userName: '',
      user:'',
      hora: '',
      dia: ''
    };
  } 
};
</script>


<style>

 
</style>