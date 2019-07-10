<template>

<div> 
  
  <div :style="{display: modoPortrait}">
    
    <v-card flat width="90vw" class="man">
      <v-layout row wrap class="borders">
        
        <v-flex xs12 >
          
            <h2 class="infomatch font-weight-light">List Matches</h2>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card flat width="90%" class="man">
      <v-layout row wrap>
        <v-flex xs12>  

          <v-card flat width="90%" class="man" > 
                <v-layout row wrap   >
                  <v-flex xs12 sm12 v-for="(dates, index) in listDate" :key="index">
        
                    <Dropdown :listDate="dates" @obtenercard="obtenercard($event)" @changeDisplay="ShowGameCard($event)" />
 
                  </v-flex>
 

 
                </v-layout> 
 
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>

    
  </div>  
             
        <v-dialog v-model="dialogdisplay" max-width="90vw">
           
          
          <v-card text-xs-center >
          
            <v-card flat width="90%" class="man colorcard  " >
              <v-layout row wrap class="display">
                <v-flex xs12 >
                  <v-card-title class="justify-center ">
                    <h2> {{dialoginfo.Elementary}}  </h2> 
    
                  </v-card-title>   
                  <v-card-text >
                    
                    
                    <p class="parrafosInfo">Location: {{dialoginfo.Location}}</p> 
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-card>

            <v-card flat width="90%" class="man colorcard" >
              <v-layout row wrap class="display">
            
                <v-flex xs12 text-xs-center>
            
                  <v-card-text  >
                    <p class="parrafosInfo3">Location Map</p>
                    
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2039.6670880608135!2d-87.63649016805219!3d41.91332968182832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb351205fae50c6f3!2sGreenbay+Elementary!5e0!3m2!1ses-419!2sar!4v1559451428207!5m2!1ses-419!2sar" width="215vw"  frameborder="0" style="border: 2px solid black" ></iframe>

                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-card>

          </v-card>

        </v-dialog>            
      

   <v-card flat width="90%" class="man">
      <v-layout row wrap>
        <v-flex :style="{display: modoPortraitPlantilla}">
            <v-card-text><p class="month">{{arrayAux.date}}</p></v-card-text>

            <v-btn icon @click="changeBack( 'none' )" ><v-icon>keyboard_backspace </v-icon></v-btn>
              <v-card flat width="90%" class="man" > 
                <v-layout row wrap  >
 
                  <v-flex xs12 sm5  mb-5  >
                    <v-card>
                      <v-toolbar color="light-blue" dark> 

                        <v-toolbar-title>List of Games Division {{arrayAux.division}}</v-toolbar-title>
                        <v-spacer></v-spacer>  
                        
                      </v-toolbar>

                      <div v-for="(game,index) in arrayAux.games" :key="index">

                        <v-list two-line subheader> 
                          <v-list-tile> 
                            <v-list-tile-content>
                              <v-list-tile-title class="text-xs-center">{{game.teamA}}</v-list-tile-title>
                              <v-list-tile-title class="text-xs-center">vs</v-list-tile-title>
                              <v-list-tile-title class="text-xs-center">{{game.teamB}}</v-list-tile-title> 
                            </v-list-tile-content>
                            <v-list-tile-action>
                              <v-btn icon ripple @click="funcionmostrardatos(game, arrayAux)">
                                <v-icon color="green lighten-1">info</v-icon>
                              </v-btn>
                            </v-list-tile-action>
                          </v-list-tile> 
                        </v-list>
                        <v-divider/> 


                      </div>


                    </v-card>
                  </v-flex>
                  <v-spacer></v-spacer>  
                  <v-flex xs12 sm6>
                    
                    <GameDisplay :gameDisplayData="gameDisplayData" :informacionGame="informacionGame" />

                  </v-flex>
                  
                  
                  <v-flex xs12 sm12>
                    
                    <Chat :showComments="showComments"  :gameDisplayData="gameDisplayData" :informacionGame="informacionGame" />
                    
                  </v-flex>
                </v-layout> 
 
          </v-card>


        </v-flex>
      </v-layout>
    </v-card>
 
  </div> 
</template>

<script> 

import Dropdown from '../components/dropdown'
import GameDisplay from '../components/gamesdisplay'
import Chat from '../components/chat'

  export default {
    components: {  Dropdown, GameDisplay, Chat},
    data() {
      return { 
        showComments: false,
        dialogdisplay: false,
        dialoginfo: [],
        informacionGame:[],
        gameDisplayData: [],
        modoPortrait: "",
        modoPortraitPlantilla: "none",
        teamListDisplay: false,
        teamGameDisplay: false,
        arrayAux: {},
        teamList:[
            {Elementary: 'AJ Katzenmaier', id: 1, Location:'24 W. Walton St., Chicago ', map:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11878.628774263563!2d-87.629069!3d41.900229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x15e198c063fc787c!2sAJ+Katzenmaier+Elementary!5e0!3m2!1ses-419!2sar!4v1559451753593!5m2!1ses-419!2sar'},
            {Elementary: 'Greenbay', id: 2, Location:'1734 N. Orleans St., Chicago ', img:'../assets/howard.png', map:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2039.6670880608135!2d-87.63649016805219!3d41.91332968182832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb351205fae50c6f3!2sGreenbay+Elementary!5e0!3m2!1ses-419!2sar!4v1559451428207!5m2!1ses-419!2sar'},
            {Elementary: 'Howard A Yeager', id: 3, Location:'2245 N. Southport Ave., Chicago ', map:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11874.342654033595!2d-87.662926!3d41.923265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1559451938954!5m2!1ses-419!2sar'},
            {Elementary: 'Marjorie P Hart', id: 4, Location:'2625 N. Orchard St., Chicago ', map:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11873.159334915188!2d-87.645973!3d41.929623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbff5d5dfcfcfa35!2sMarjorie+P+Hart+Elementary!5e0!3m2!1ses-419!2sar!4v1559451979296!5m2!1ses-419!2sar'},
            {Elementary: 'North Elementary', id: 5, Location:'1409 N. Ogden Ave., Chicago', map:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11877.351102508312!2d-87.646188!3d41.907097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409+N+Ogden+Ave%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1559451818299!5m2!1ses-419!2sar'},
            {Elementary: 'South Elementary' , id: 6, Location:'2101 N. Fremont St., Chicago', map:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11874.991761014922!2d-87.651367!3d41.919777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses-419!2sar!4v1559451884475!5m2!1ses-419!2sar'}
        ],
        gamesList:[
            {
                U1:
                          {gameA:{id: 1, teamA: 'AJ Katzenmaier', teamB:'South Elementary', time: '9:30am'},
                          gameB: {id: 2,teamA:'Greenbay', teamB:'North Elementary',time: '1:00pm'},
                          gameC: {id: 3,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '9:30am'},
                          },
                U2:
                          {gameA:{id: 4,teamA:'AJ Katzenmaier', teamB:'South Elementary',time: '1:00pm'},
                          gameB: {id: 5,teamA:'Greenbay', teamB:'North Elementary', time: '9:30am'},
                          gameC: {id: 6,teamA:'Howard A Yeager', teamB:'Marjorie P Hart',time: '1:00pm'}
                          },
                U3:
                          {gameA:{id: 7,teamA:'GreenbayAJ', teamB:'Howard A Yeager', time: '9:30am'},
                          gameB: {id: 8,teamA:' Katzenmaier', teamB:'North Elementary',time: '1:00pm'},
                          gameC: {id: 9,teamA:'South Elementary', teamB:'Marjorie P Hart', time: '9:30am'},
                          },
                U4:
                          {gameA:{id: 10,teamA:'North Elementary', teamB:'South Elementary', time: '9:30am'},
                          gameB: {id: 11,teamA:'Marjorie P Hart', teamB:'AJ Katzenmaier', time: '9:30am'},
                          gameC: {id: 12,teamA:'Howard A Yeager', teamB:'Greenbay',time: '1:00pm'}
                          }              
            },//empieza fecha 2
            { 
                U1:
                          {gameA:{id: 13,teamA:'AJ Katzenmaier', teamB:'South Elementary',time: '1:00pm'},
                          gameB: {id: 14,teamA:'Greenbay', teamB:'North Elementary',time: '1:00pm'},
                          gameC: {id: 15,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '9:30am'},
                          }, 
                U5:
                          {gameA:{id: 16,teamA:'Marjorie P Hart', teamB:'AJ Katzenmaier', time: '9:30am'},
                          gameB: {id: 17,teamA:'South Elementary', teamB:'Howard A Yeager',time: '1:00pm'},
                          gameC: {id: 18,teamA:'North Elementary', teamB:'Greenbay', time: '9:30am'}
                          },
                U6:
                          {gameA:{id: 19,teamA:'North Elementary', teamB:'AJ Katzenmaier',time: '1:00pm'},
                          gameB: {id: 20,teamA:'Greenbay', teamB:'South Elementary', time: '9:30am'},
                          gameC: {id: 21,teamA:'Marjorie P Hart', teamB:'Howard A Yeager',time: '1:00pm'}
                          },
            },//empieza fecha 3
            { 
                 
                U2:
                          {gameA:{id: 22,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '9:30am'},
                          gameB: {id: 23,teamA:'Greenbay', teamB:'North Elementary', time: '1:00pm'},
                          gameC: {id: 24,teamA:'Howard A Yeager', teamB:'Marjorie P Hart'}
                          },
                U3:
                          {gameA:{id: 25,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 26,teamA:'Greenbay', teamB:'North Elementary', time: '9:30am'},
                          gameC: {id: 27,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '1:00pm'},
                          },
                U4:
                          {gameA:{id: 28,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '9:30am'},
                          gameB: {id: 29,teamA:'Greenbay', teamB:'North Elementary', time: '1:00pm'},
                          gameC: {id: 30,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '9:30am'}
                          } ,
                U5:
                          {gameA:{id: 31,teamA:'Marjorie P Hart', teamB:'AJ Katzenmaier', time: '9:30am'},
                          gameB: {id: 32,teamA:'South Elementary', teamB:'Howard A Yeager', time: '1:00pm'},
                          gameC: {id: 33,teamA:'North Elementary', teamB:'Greenbay', time: '1:00pm'}
                          }
            },//empieza fecha 4
            { 
                U1:
                          {gameA:{id: 34,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '9:30am'},
                          gameB: {id: 35,teamA:'Greenbay', teamB:'North Elementary', time: '1:00pm'},
                          gameC: {id: 36,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '1:00pm'},
                          }, 
                U2:
                          {gameA:{id: 37,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 38,teamA:'Greenbay', teamB:'North Elementary', time: '9:30am'},
                          gameC: {id: 39,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '1:00pm'}
                          },
                U3:
                          {gameA:{id: 40,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 41,teamA:'Greenbay', teamB:'North Elementary', time: '1:00pm'},
                          gameC: {id: 42,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '9:30am'},
                          },
                U4:
                          {gameA:{id: 43,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 44,teamA:'Greenbay', teamB:'North Elementary', time: '9:30am'},
                          gameC: {id: 45,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '9:30am'}
                          } ,
                U5:
                          {gameA:{id: 46,teamA:'Marjorie P Hart', teamB:'AJ Katzenmaier', time: '9:30am'},
                          gameB: {id: 47,teamA:'South Elementary', teamB:'Howard A Yeager', time: '1:00pm'},
                          gameC: {id: 48,teamA:'North Elementary', teamB:'Greenbay', time: '9:30am'}
                          },
                U6:
                          {gameA:{id: 49,teamA:'North Elementary', teamB:'AJ Katzenmaier', time: '9:30am'},
                          gameB: {id: 50,teamA:'Greenbay', teamB:'South Elementary', time: '1:00pm'},
                          gameC: {id: 51,teamA:'Marjorie P Hart', teamB:'Howard A Yeager', time: '1:00pm'}
                          },
            },//empieza fecha 5
            { 
                U1:
                          {gameA:{id: 52,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '9:30am'},
                          gameB: {id: 53,teamA:'Greenbay', teamB:'North Elementary', time: '1:00pm'},
                          gameC: {id: 54,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '1:00pm'},
                          }, 
                U2:
                          {gameA:{id: 55,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '9:30am'},
                          gameB: {id: 56,teamA:'Greenbay', teamB:'North Elementary', time: '1:00pm'},
                          gameC: {id: 57,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '9:30am'}
                          },
                U3:
                          {gameA:{id: 58,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 59,teamA:'Greenbay', teamB:'North Elementary', time: '9:30am'},
                          gameC: {id: 60,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '9:30am'},
                          },
                U4:
                          {gameA:{id: 61,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 62,teamA:'Greenbay', teamB:'North Elementary', time: '1:00pm'},
                          gameC: {id: 63,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '9:30am'}
                          } ,
                U5:
                          {gameA:{id: 64,teamA:'Marjorie P Hart', teamB:'AJ Katzenmaier', time: '9:30am'},
                          gameB: {id: 65,teamA:'South Elementary', teamB:'Howard A Yeager', time: '9:30am'},
                          gameC: {id: 66,teamA:'North Elementary', teamB:'Greenbay', time: '1:00pm'}
                          },
                U6:
                          {gameA:{id: 67,teamA:'North Elementary', teamB:'AJ Katzenmaier', time: '1:00pm'},
                          gameB: {id: 68,teamA:'Greenbay', teamB:'South Elementary', time: '1:00pm'},
                          gameC: {id: 69,teamA:'Marjorie P Hart', teamB:'Howard A Yeager', time: '9:30am'}
                          },
            },//empieza fecha 6
            { 
                U1:
                          {gameA:{id: 70,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 71,teamA:'Greenbay', teamB:'North Elementary', time: '9:30am'},
                          gameC: {id: 72,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '1:00pm'},
                          }, 
                U2:
                          {gameA:{id: 73,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 74,teamA:'Greenbay', teamB:'North Elementary', time: '1:00pm'},
                          gameC: {id: 75,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '9:30am'}
                          }, 
                U5:
                          {gameA:{id: 76,teamA:'Marjorie P Hart', teamB:'AJ Katzenmaier', time: '9:30am'},
                          gameB: {id: 77,teamA:'South Elementary', teamB:'Howard A Yeager', time: '9:30am'},
                          gameC: {id: 78,teamA:'North Elementary', teamB:'Greenbay', time: '1:00pm'}
                          },
                U6:
                          {gameA:{id: 79,teamA:'North Elementary', teamB:'AJ Katzenmaier', time: '9:30am'},
                          gameB: {id: 80,teamA:'Greenbay', teamB:'South Elementary', time: '1:00pm'},
                          gameC: {id: 81,teamA:'Marjorie P Hart', teamB:'Howard A Yeager', time: '1:00pm'}
                          },
            },//empieza fecha 7
            { 
                U1:
                          {gameA:{id: 82,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '9:30am'},
                          gameB: {id: 83,teamA:'Greenbay', teamB:'North Elementary', time: '1:00pm'},
                          gameC: {id: 84,teamA:'Howard A Yeager', teamB:'Marjorie P Hart'},
                          },
                U3:
                          {gameA:{id: 85,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 86,teamA:'Greenbay', teamB:'North Elementary', time: '9:30am'},
                          gameC: {id: 87,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '1:00pm'},
                          },
                U4:
                          {gameA:{id: 88,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 89,teamA:'Greenbay', teamB:'North Elementary', time: '1:00pm'},
                          gameC: {id: 90,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '9:30am'}
                          } ,
                U5:
                          {gameA:{id: 91,teamA:'Marjorie P Hart', teamB:'AJ Katzenmaier', time: '9:30am'},
                          gameB: {id: 92,teamA:'South Elementary', teamB:'Howard A Yeager', time: '1:00pm'},
                          gameC: {id: 93,teamA:'North Elementary', teamB:'Greenbay', time: '1:00pm'}
                          }
            },//empieza fecha 8
            { 
                  
                U2:
                          {gameA:{id: 94,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 95,teamA:'Greenbay', teamB:'North Elementary', time: '1:00pm'},
                          gameC: {id: 96,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '9:30am'}
                          },
                U3:
                          {gameA:{id: 97,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 98,teamA:'Greenbay', teamB:'North Elementary', time: '9:30am'},
                          gameC: {id: 99,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '1:00pm'},
                          },
                U4:
                          {gameA:{id: 100,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '9:30am'},
                          gameB: {id: 101,teamA:'Greenbay', teamB:'North Elementary', time: '9:30am'},
                          gameC: {id: 102,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '1:00pm'}
                          },
                U6:
                          {gameA:{id: 103,teamA:'North Elementary', teamB:'AJ Katzenmaier', time: '9:30am'},
                          gameB: {id: 104,teamA:'Greenbay', teamB:'South Elementary', time: '1:00pm'},
                          gameC: {id: 105,teamA:'Marjorie P Hart', teamB:'Howard A Yeager', time: '9:30am'}
                          },
            },//empieza fecha 9
            { 
                U1:
                          {gameA:{id: 106,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '9:30am'},
                          gameB: {id: 107,teamA:'Greenbay', teamB:'North Elementary', time: '1:00pm'},
                          gameC: {id: 108,teamA:'Howard A Yeager', teamB:'Marjorie P Hart'},
                          },
                U3:
                          {gameA:{id: 109,teamA:'AJ Katzenmaier', teamB:'South Elementary', time: '1:00pm'},
                          gameB: {id: 110,teamA:'Greenbay', teamB:'North Elementary', time: '9:30am'},
                          gameC: {id: 111,teamA:'Howard A Yeager', teamB:'Marjorie P Hart', time: '1:00pm'},
                          }, 
                U5:
                          {gameA:{id: 112,teamA:'Marjorie P Hart', teamB:'AJ Katzenmaier', time: '9:30am'},
                          gameB: {id: 113,teamA:'South Elementary', teamB:'Howard A Yeager', time: '1:00pm'},
                          gameC: {id: 114,teamA:'North Elementary', teamB:'Greenbay', time: '9:30am'}
                          },
                U6:
                          {gameA:{id: 115,teamA:'North Elementary', teamB:'AJ Katzenmaier', time: '1:00pm'},
                          gameB: {id: 116,teamA:'Greenbay', teamB:'South Elementary', time: '1:00pm'},
                          gameC: {id: 117,teamA:'Marjorie P Hart', teamB:'Howard A Yeager', time: '9:30am'}
                          },
            }

        ]
        ,
        fechas:[

          'Date 01 - September',
          'Date 02 - September',
          'Date 03 - September',
          'Date 04 - September',
          'Date 05 - September',
          'Date 06 - October',
          'Date 07 - October',
          'Date 08 - October',
          'Date 09 - October'
        ],
        horarios:  [
          
          {dia: 'September 1st', hora: { mañana: '9:30am', tarde: '1:00am'}},
          {dia: 'September 8th', hora: { mañana: '9:30am', tarde: '1:00am'}},
          {dia: 'September 15', hora: { mañana: '9:30am', tarde: '1:00am'}},
          {dia: 'September 22', hora: { mañana: '9:30am', tarde: '1:00am'}},
          {dia: 'September 29th', hora: { mañana: '9:30am', tarde: '1:00am'}},
          {dia: 'October 6st', hora: { mañana: '9:30am', tarde: '1:00am'}},
          {dia: 'October 13st', hora: { mañana: '9:30am', tarde: '1:00am'}},
          {dia: 'October 20st', hora: { mañana: '9:30am', tarde: '1:00am'}},
          {dia: 'October 27st', hora: { mañana: '9:30am', tarde: '1:00am'}},

        ],
        UDivision:[

            'U1',
            'U2',
            'U3',
            'U4',
            'U5',
            'U6'

        ],
        gamesData: [],
        listDate: [
          
          {location:'24 W. Walton St., Chicago ', date: 'Date 01 - September', division: {divisionA: 'U1', divisionB: 'U2', divisionC:'U3', divisionD: 'U4' }, id:1},
          {location:'2245 N. Southport Ave., Chicago ', date: 'Date 02 - September',division:  {divisionA: 'U1', divisionB: 'U5', divisionC:'U6'}, id:2},
          {location:'1409 N. Ogden Ave., Chicago', date: 'Date 03 - September',division:  {divisionA: 'U2', divisionB: 'U3', divisionC:'U4', divisionD: 'U5'}, id:3},
          {location:'2101 N. Fremont St., Chicago', date: 'Date 04 - September',division:  {divisionA: 'U1', divisionB: 'U2', divisionC:'U3', divisionD: 'U6'}, id:4},
          {location:'1734 N. Orleans St., Chicago ', date: 'Date 05 - September',division:  {divisionA: 'U4', divisionB: 'U5'}, id:5},
          {location:'2625 N. Orchard St., Chicago ', date: 'Date 06 - October',division:  {divisionA: 'U1', divisionB: 'U2', divisionC:'U5', divisionD: 'U6'}, id:6},
          {location:'2245 N. Southport Ave., Chicago ', date: 'Date 07 - October',division:  {divisionA: 'U1', divisionB: 'U3', divisionC:'U4', divisionD: 'U5'}, id:7},
          {location:'1409 N. Ogden Ave., Chicago', date: 'Date 08 - October',division:  {divisionA: 'U2', divisionB: 'U3', divisionC:'U4', divisionD: 'U6'}, id:8},
          {location:'24 W. Walton St., Chicago ', date: 'Date 09 - October',division:  {divisionA: 'U1', divisionB: 'U3', divisionC:'U5', divisionD: 'U6'}, id:9},
  
        ]
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
      } ,
      passingObject: function(parameter){
          this.gamesData = parameter 
      },
      changeBack(parameter){ 
          this.modoPortrait = "";
          this.modoPortraitPlantilla = parameter; 
      },
      mostrarTeamList: function(){
        this.teamListDisplay = !this.teamListDisplay;
      },
      mostrarGameList: function(){
        this.teamGameDisplay = !this.teamGameDisplay;
      }, 
      ShowGameCard: function(parameter){
        this.modoPortrait = parameter;
        this.modoPortraitPlantilla = "";
      },
      noShowGameCard: function(parameter){
        this.modoPortrait = "";
        this.modoPortraitPlantilla = parameter;
      },
      obtenercard: function(value){ 
        let parameter = value;
        let date = parameter.fecha;
        let location = parameter.fecha.location;
        let division = parameter.division;
        let dateAux = null;
        let divisionAux = null; 
        let fechaAux = null;
  

        for(let counter = 0;counter < this.fechas.length; counter++){
          
          if(date.date == this.fechas[counter]){     
            dateAux =  counter ;
            fechaAux = this.horarios[counter] 
          } 
        }

        for(let counter = 0; counter < this.UDivision.length; counter++){

          if(division == this.UDivision[counter]){     
            divisionAux = this.UDivision[counter]; 
          }
        } 
  
        for(let counter = 0; counter < this.UDivision.length; counter++){

          if(division == this.UDivision[counter]){     
            divisionAux = this.UDivision[counter]; 
          }
        } 
        this.arrayAux.division = divisionAux ;
        this.arrayAux.games = this.gamesList[dateAux][divisionAux];
        this.arrayAux.date = date.date; 
        this.arrayAux.time = fechaAux;
        this.arrayAux.location = location;

  
      },

      funcionmostrardatos: function(game, arrayAux){

        
        this.gameDisplayData = game;
        this.informacionGame = arrayAux; 
        this.showComments = false;
         

      },

      infoTeamDialog: function(team){

        this.dialogdisplay = true;
        this.dialoginfo = team;
        
      }

    }
  };
</script>


<style scoped>

  #heightGames{
    margin: 0 auto;
    height: 80vh;
  }

  .cardinfo {
    margin: 0 auto;
  }

  .textgame{
    font-size: 5px;
  }


  .man2 {
    margin: 15px auto 0 ;
    background-color: #03a9f4;
     height: 56px;
  }
</style>