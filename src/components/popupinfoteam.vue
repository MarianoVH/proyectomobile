<template>
    <v-dialog max-width="90vh">
         


        <v-card text-xs-center>
            <v-card-title class="justify-center">
                <h2>Elementary Info</h2> 
                        <img src="../assets/howard.png" alt="" width="200px">  
            </v-card-title>
                    
            

    <v-card flat width="90%" class="man colorcard">
      <v-layout row wrap class="display">
        
        <v-flex xs12 >
          
            <v-card-text >
                <p class="errorinfo"><v-icon color="red">error</v-icon> The season starts on September</p>
                <p class="parrafosInfo2">Leaderboard Position: - </p>
                <p class="parrafosInfo">Points: 0</p>
                <p class="parrafosInfo">Wins: 0</p>
                <p class="parrafosInfo">Draws: 0</p>
                <p class="parrafosInfo">Loses: 0</p>
                <p class="parrafosInfo">Total Games: 0</p> 
            </v-card-text>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card flat width="90%" class="man colorcard" >
      <v-layout row wrap class="display">
        
        <v-flex xs12 text-xs-center>
          
            <v-card-text  >
                <p class="parrafosInfo3">Location</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2039.6670880608135!2d-87.63649016805219!3d41.91332968182832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb351205fae50c6f3!2sGreenbay+Elementary!5e0!3m2!1ses-419!2sar!4v1559451428207!5m2!1ses-419!2sar" width="215vw"  frameborder="0" style="border: 2px solid black" ></iframe>

            </v-card-text>
        </v-flex>
      </v-layout>
    </v-card>

        </v-card>

    </v-dialog>
</template>

<script>
export default {
    
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
  .parrafosInfo{
      display: inline-block;
      margin-right: 50px;
      background-color: #10B7CC;
      color:white;
      padding: 5px;
      border-radius: 5px; 
  }
  .parrafosInfo2{
           
      margin-right: 50px;
      background-color: #10B7CC;
      color:white;
      padding: 5px;
      border-radius: 5px; 
  }

      .parrafosInfo3{
            
      background-color: #10B7CC;
      color:white;
      padding: 5px;
      border-radius: 5px; 
  }

</style>
