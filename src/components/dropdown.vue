<template>
    <v-card >
        <v-toolbar color="white mb-3" dark   > 

            <v-toolbar-title class=" black--text">{{listDate.date}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn flat color="black" icon @click="mostrarsolofecha" > 
                        
                <v-icon> keyboard_arrow_down</v-icon></v-btn>
                        
        </v-toolbar>

        <div v-show="showdatadrop">

            <v-list two-line subheader v-for="( u , index) in listDate.division" :key="index"> 
                <v-list-tile> 
                    <v-list-tile-content>
                        <v-list-tile-title> {{u}} Division</v-list-tile-title>
                        <v-list-tile-sub-title>Click for more info!</v-list-tile-sub-title>

                    </v-list-tile-content> 
                    
                    <v-btn  icon flat   @click="changeDisplay( listDate, u )"><v-icon color="green lighten-1">add_circle</v-icon></v-btn>
                </v-list-tile> 
                          
                <v-divider theme--light/>

            </v-list>
                      
        </div>
    </v-card>

</template>

<script> 
export default { 

  props: ["listDate"],
  data() {
    return {

        showdatadrop: false, 

    };
  },
  methods: {
    changeDisplay(fecha, division){
      this.$emit('changeDisplay','none');
      this.$emit('passingObject',this.listDate); 
      this.$emit('obtenercard',{fecha: fecha, division: division}) 
    },
    mostrarsolofecha(){
        this.showdatadrop = !this.showdatadrop;
    }
  }
};
</script>

<style>
</style>