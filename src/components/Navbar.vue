<template>

    <nav>
        <v-toolbar app> 
        <v-toolbar-side-icon class="grey--text" @click="navizq = !navizq"></v-toolbar-side-icon>
            <v-toolbar-title>
                <span>NYSL</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon flat color="grey" v-for="link in links" :key="link.text" router :to="link.route">
                <v-icon>{{ link.icon }}</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app v-model="navizq" class="navsidecolor" dark>
            <v-layout column align-center>
                <v-flex class="mt-5 ">
                    <v-avatar size="125.45" >
                        <img src="../assets/userdefault.png" alt=""> 
                    </v-avatar> 
                    <p class="subheading mt-1 white--text" >{{user.displayName}}</p>
                </v-flex>
            </v-layout>
            <v-divider/>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon >{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>


            <v-card v-show="logginGoogle" flat width="90%" class="man colorgooglediv">
                <v-layout row wrap mb-3>
                  <v-flex>
                    <div class="googlewrapper">
                       
                        <v-btn @click="logGoogle" class="buttongoogle" flat  orange> Log In with Google</v-btn>
                        <v-btn @click="toggleEmail" class="buttonemail" flat  orange> Log In with Email</v-btn>

                        <v-card-actions v-show="emailForm">
                            <v-flex xs12>
                                <v-form ref="form"   lazy-validation>
                                    
                                    <v-text-field v-model="userEmail" label="User" required ></v-text-field>
                                    
                                    <v-text-field v-model="passwordEmail"  type="password" name="input-10-1" label="Password" ></v-text-field>
                                    <v-btn  color="success" @click="emailFirebase"> LogIn! </v-btn>
                                    <div v-show="loggedError"> 
                                        <h2 class="googletitle font-weight-light">Error!!</h2>

                                    </div>

                                </v-form> 
                            </v-flex>
                        </v-card-actions> 
                     </div>
                  </v-flex>
                </v-layout>
            </v-card>
  
            <v-card v-show="loggedGoogle" flat width="90%" class="man colorgooglediv">
                <v-layout row wrap mb-3>
                  <v-flex>
                    <div class="googlewrapper">
                       
                        <v-btn @click="logOutGoogle" class="buttongoogle" flat  orange> Log Out</v-btn> 

  
                     </div>
                  </v-flex>
                </v-layout>
            </v-card>  
 

            <v-card v-show="loggedError" flat width="90%" class="man colorgooglediv">
                <v-layout row wrap mb-3>
                  <v-flex>
                    <div class="googlewrapper">
                      <span class="googletitle font-weight-light">Error!!</span>
                      
                     </div>
                  </v-flex>
                </v-layout>
            </v-card>

        </v-navigation-drawer>
    
    </nav>


</template>

<script>
import firebase from 'firebase' 

  export default {

      data(){
          return {
              navizq: false,
              links: [
                    {icon: 'home',text:'Home', route:'/'},
                    {icon: 'book',text:'Teams Info', route:'/teamsinfo'},
                    {icon: 'folder',text:'Game Info', route:'/gameInfo'}
              ],
              logginGoogle: true,
              loggedGoogle: false,
              user: {
                  displayName:'Unregistered user', 
              },
              userEmail: '',
              passwordEmail: '',
              emailForm: false,
              loggedError: false,
          }
      },
      methods:{
          
        logGoogle(){
          let provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(() => { 
                this.logginGoogle = false;
                this.loggedGoogle = true; 
                this.user =  firebase.auth().currentUser;  
                this.$router.replace("/");
                });
            
        },
        logOutGoogle(){
            firebase.auth().signOut().then(() => { 
                this.logginGoogle = true;
                this.loggedGoogle = false;
                this.$router.replace("/");
                this.user.displayName = 'Unregistered user';
                }  );
        },  
         
        emailFirebase(){
            firebase.auth().signInWithEmailAndPassword(this.userEmail,this.passwordEmail).then(() => {
            this.logginGoogle = false;
            this.loggedGoogle = true; 
            this.user =  firebase.auth().currentUser;  
            this.$router.replace("/");
            this.user.displayName = this.userEmail;
            
            }).catch( () => {
            this.loggedError = true })
        },
        toggleEmail(){
            this.emailForm = !this.emailForm;
        }
      },
  }
</script>

<style>  


  .buttongoogle{ 
    background-color: #03a9f4;
    color: white;
  }

  .buttonemail{
      background-color: #15b95f;
    color: white;
  }
</style>
