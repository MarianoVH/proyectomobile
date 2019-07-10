<template>

  <div>
    
    <v-card flat width="90vw" class="man">
      <v-layout row wrap class="borders">
        
        <v-flex xs12 >
          
            <h2 class="infomatch font-weight-light">Next Matches</h2>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card flat width="90%" class="man">
      <v-layout row wrap>
        <v-flex>
            <v-card-text><p class="month">September</p></v-card-text>
          <v-card flat width="90%" class="man" > 
                <v-layout row wrap v-resize="onResize" >
                  <v-flex xs12 sm12  >
                    <v-card>
                      <v-toolbar color="light-blue" dark> 

                        <v-toolbar-title>Division</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn flat @click="funcionMostrarMatches"><v-toolbar-title>U1 and U4</v-toolbar-title> 
                        
                        <v-icon> keyboard_arrow_down</v-icon></v-btn>
                        
                      </v-toolbar>

                      <div  v-show="mostrarU1U4">

                        <v-list two-line subheader v-for="(game,index) in infoSeptember" :key="index"> 
                          <v-list-tile> 
                            <v-list-tile-content>
                              <v-list-tile-title>{{ game.ElementaryA }} VS {{ game.ElementaryB }}</v-list-tile-title>
                              <v-list-tile-sub-title>{{ date[0] }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                              <v-btn icon ripple  @click="infoPupDisplay(game)"> <v-icon color="green">info</v-icon>
                              </v-btn>
                            </v-list-tile-action>
                          </v-list-tile> 
                        </v-list>
                        <v-divider/>
                         


                      </div>


                    </v-card>
                  </v-flex>
 

                  <v-flex xs12 sm12 mt-3>
                    <v-card>
                      <v-toolbar color="light-blue" dark> 

                        <v-toolbar-title>Division</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn flat @click="funcionMostrarMatchesU4"><v-toolbar-title>U2 and U5</v-toolbar-title> 
                        
                        <v-icon> keyboard_arrow_down</v-icon></v-btn>
                        
                      </v-toolbar>

                      <div  v-show="mostrarU2U5">

                         <v-list two-line subheader v-for="(game,index) in infoOctober" :key="index"> 
                          <v-list-tile> 
                            <v-list-tile-content>
                              <v-list-tile-title>{{ game.ElementaryA }} VS {{ game.ElementaryB }}</v-list-tile-title>
                              <v-list-tile-sub-title>{{ date[1] }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                              <v-btn icon ripple @click="infoPupDisplay(game)" > 
                                <v-icon color="green">info</v-icon>
                              </v-btn>
                            </v-list-tile-action>
                          </v-list-tile> 
                        </v-list>
                        <v-divider/>


                      </div>


                    </v-card>
                  </v-flex>
                </v-layout> 

                 


                <v-card flat>
                  <v-layout row wrap mt-3  >
                    
                    <v-flex xs12>
                        <div class="championbox">


                          <h2 class="textchampion "><v-icon color="orange">star</v-icon>Current Champion<v-icon color="orange">star</v-icon></h2>
                          <img src="../assets/howard.png" alt="" width="250px">
                          <p class="champion">Howard A Yeager Elementary</p>
                        </div>
                    </v-flex>
                  </v-layout>
                </v-card>
                   
                
                <v-layout row wrap class="infoseason" mt-5 mb-2>
                  <v-flex xs12 >
                      <h2 class="seasonstarts font-weight-light">The season starts on September</h2>
                  </v-flex>
                </v-layout> 
          </v-card>



        <v-dialog v-model="dialogdisplay" max-width="90vw">
           
          
          <v-card text-xs-center >
          
            <v-card flat width="90%" class="man colorcard  " >
              
              <v-layout row wrap class="display">
                <v-flex xs12 >
                  <v-btn fixed  flat color="red" icon @click="infopupoff"> <v-icon>highlight_off</v-icon></v-btn>
                  <v-card-title class="justify-center ">
                    
                    <h2 class="tituloshome font-weight-light"> {{arrayAux.ElementaryA}}  </h2> 
    
                  </v-card-title>  
                  <h3 class="vsclass">VS</h3>
                  <v-card-title class="justify-center ">
                    <h2 class="tituloshome font-weight-light"> {{arrayAux.ElementaryB}}  </h2> 
    
                  </v-card-title>   
                  <v-card-text >
                    
                    <p class="parrafosInfo informacionhome">Date:     </p>
                    <p class="infovuehome">{{arrayAux.time}}</p>
                    <p class="parrafosInfo informacionhome">Location: </p> 
                    <p class="infovuehome">{{arrayAux.Location}}</p>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-card>

            <v-card flat width="90%" class="man colorcard" >
              <v-layout row wrap class="display">
            
                <v-flex xs12 text-xs-center>
            
                  <v-card-text  >
                    <p class="parrafosInfo3 informacionhome mb-4">Location Map</p>
                    
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246110987!2d-87.6312390845582!3d41.90029237922041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1559701095623!5m2!1ses-419!2sar" width="300" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-card>

          </v-card>

        </v-dialog> 

        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script> 
export default {
  components: { },

  data() {
    return {
      dialogdisplay: false,
      matches: [
            {Elementary: 'AJ Katzenmaier', id: 1},
            {Elementary: 'Greenbay', id: 2},
            {Elementary: 'Howard A Yeager', id: 3},
            {Elementary: 'Marjorie P Hart', id: 4},
            {Elementary: 'North Elementary', id: 5},
            {Elementary: 'South Elementary' , id: 6}
      ],
      mostrarU1U4: false,
      mostrarU2U5: false,
      date: ['01 - September, 9:30am', '01 - September, 1:00pm'], 
      infoSeptember:  [
            {ElementaryA: 'AJ Katzenmaier', ElementaryB: 'South Elementary',time: '01 - September, 9:30am',id: 1, Location:'24 W. Walton St., Chicago ', map:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11878.628774263563!2d-87.629069!3d41.900229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15e198c063fc787c!2sAJ+Katzenmaier+Elementary!5e0!3m2!1ses-419!2sar!4v1559451753593!5m2!1ses-419!2sar'},
            {ElementaryA: 'Greenbay',ElementaryB: 'South Elementary', id: 2, Location:'1734 N. Orleans St., Chicago ', img:'../assets/howard.png',time: '01 - September, 9:30am'  },
            {ElementaryA: 'Howard A Yeager',ElementaryB: 'Marjorie P Hart', id: 3, Location:'2245 N. Southport Ave., Chicago ',time: '01 - September, 9:30am' }    
      ],
      infoOctober: [
            {ElementaryA: 'AJ Katzenmaier', ElementaryB: 'South Elementary', id: 4, Location:'2625 N. Orchard St., Chicago ',time: '01 - September, 1:00pm' },
            {ElementaryA: 'Greenbay',ElementaryB: 'South Elementary', id: 5, Location:'1409 N. Ogden Ave., Chicago',time: '01 - September, 1:00pm'  },
            {ElementaryA: 'Howard A Yeager',ElementaryB: 'Marjorie P Hart', id: 6, Location:'2101 N. Fremont St., Chicago',time: '01 - September, 1:00pm'  }

      ],
      arrayAux: [],
      infoPup: []    
    };
  },
  methods: {
    onResize: function() {
      if ((window.innerWidth <= 600) & (this.modoPortrait == "") & (this.modoPortrait == "")){
        this.modoPortrait = "";
        this.modoPortraitPlantilla = "none";
        this.botonMostrar = true;
      }else if (window.innerWidth > 600){
        this.modoPortrait = "";
        this.modoPortraitPlantilla = "";
        this.botonMostrar = false;
      }
    },
    funcionMostrarMatches: function(){
      this.mostrarU1U4 = !this.mostrarU1U4;
    },
    funcionMostrarMatchesU4: function(){
      this.mostrarU2U5 = !this.mostrarU2U5;
    },
    infoPupDisplay: function (game){
 
          this.arrayAux = game;
          this.dialogdisplay = true;
        },

    infopupoff: function(){

      this.dialogdisplay = false;
    }
      }

    
   
};
</script>

<style >
  .champion{
    font-size: 30px; 
  }
  .championbox{
    border: 1px solid rgb(224, 221, 221); 
    text-align: center; 
    margin: 0 auto;

  }
  .month{
    text-align: center;
    font-size: 30px;
    background-color: #EEE;
    width: 200px;
    margin: 0 auto;
    border-radius: 5px;
  }
  .man {
    margin: 15px auto 0 ;
  }

  .borders {
    height: 56px;
    background-color: #4EA852;
  }

  h2.infomatch {
    font-size: 34px;
    text-align: center;
    color: white;
  }

  .infoseason {
    background-color: #512DA8;
    border-radius: 20px;
    padding: 3px;
  }

  h2.seasonstarts {
    font-size: 22px;
    text-align: center;
    color: white;
    padding: 3px
  }

  h3.division {
    font-size: 34px;
    text-align: center;
    border-radius: 8px;
    color: white;
    background-color: #10B7CC;
  }

  .matches {
    font-size: 20px;
    text-align: center;

  }

  .category {
    font-size: 20px;
    width: 50px;
    margin: 10px auto; 
  }
 
  .tituloshome{
    font-size: 30px;
    background-color:#03a9f4;
    padding: 10px;
    border-radius: 15px;
    color: white; 
  }

  .vsclass{
    text-align: center;
    font-size: 20px;
  }

  .informacionhome {
        margin: 0 auto;
    text-align: center;
    font-size: 25px;
    background-color: #4EA852;
    color: white;
    width: 70vw;
    border-radius: 10px
  }  

  .infovuehome {
    text-align: center;
    font-size: 22px;
  }
</style>
