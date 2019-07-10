<template>

    <div v-show="showBoxComments">

            <v-card   class="white--text">
 
      <v-btn flat @click="mostrarMensajes" class="success mx-0 mt-3 ml-2">{{leaveComment}}</v-btn>
      <div v-show="selectmatch">
          
          <p class="black--text"><v-icon>error</v-icon>Select a match and click again!</p>
      </div>
    </v-card>
        
        <v-card v-show="showComments">
        <v-card  color="dark" class="black--text mt-2">
            
            <v-card-text primary-title v-for="mensaje in mensajes" :key="mensajes[mensaje]">
                
                <p>User:{{mensaje.userName}} </p> 
                <p>Mail: {{mensaje.email}}</p>
                <p>Message:{{mensaje.mensaje }} </p> 
                <v-divider/> 

            </v-card-text>
        </v-card>

        <v-card color="ligth" class="white--text mt-2">
            <v-card-text primary-title>
                <v-form>

                    <v-divider />
                    <v-textarea  v-model="content" label="Comment"/>
                    <v-btn flat @click="submit" class="success mx-0 mt-3 ml-2">Comment!</v-btn>
          
                </v-form>
            </v-card-text>
        </v-card>
        </v-card>
    </div>




</template> 

<script>
import db from '../firebase/firebaseInit'
import firebase from 'firebase'




export default {
    props: ["gameDisplayData", "showComments"],
    data() {
        return {
        content: [],
        selectmatch: false,
        mensajes:[], 
        leaveComment: "Comment!",
        userName: '',
        showBoxComments: false,
        user:'',
        };
    },
    methods: {
        
        submit(){
 
            if(firebase.auth().currentUser){
                this.user = firebase.auth().currentUser
            }
       
            const project = {
                message: this.content,
                match: this.gameDisplayData.id,
                name: this.user.displayName || '',
                email: this.user.email,
                photo: this.user.photoURL 
            }
      
            db.ref('match/' + this.gameDisplayData.id).push(project).then(()=> {
                this.content = '' 
            })
 

        },
        cargarMensajes(mensajes){
            this.mensajes = []


            for(let key in mensajes){
            if(key == this.gameDisplayData.id){


                for(let counter in mensajes[key]){



                this.mensajes.push({
                mensaje: mensajes[key][counter].message,
                match: mensajes[key][counter].match,
                userName: mensajes[key][counter].name,
                email: mensajes[key][counter].email,
                photo: mensajes[key][counter].photoURL 
                }) 
                }
            }
         }

        }, 
        mostrarMensajes(){
             
            if(this.gameDisplayData.length == 0){
 
               this.showComments= false;
               this.selectmatch = true;
            }else{
                this.selectmatch = false;
                this.showComments= true;
                db.ref('/match').on('value', snapshot => this.cargarMensajes(snapshot.val()))
            }
                
                
        } 
    },
    created(){

    db.ref('/match').on('value', snapshot => this.cargarMensajes(snapshot.val()))

    if(firebase.auth().currentUser){
                this.showBoxComments = true;
                this.showComments = false;
            }
 
  } 
}
</script>

<style>

</style>
