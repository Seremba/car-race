<template>
<base-lay-out page-title="Jimbo #11">
<!-- added  -->
     <template v-slot:actions-end>
      <ion-button router-link="/results/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
<!-- end added  -->

   <!-- <ion-list>
       <ion-item>P1</ion-item>
       <ion-item>+25</ion-item>
       <ion-item>LAP 42</ion-item>
       <ion-item>IN 3</ion-item>
       <ion-item>888888<br>2</ion-item>
   </ion-list> -->

   <results-list :results="results"></results-list>
</base-lay-out>        
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue';

import { add } from 'ionicons/icons'    

import BaseLayOut from '../components/base/BaseLayout.vue'

import ResultsList from '../results/ResultsList.vue';


export default {
    components: {
        BaseLayOut,
        ResultsList,
        IonButton,
        IonIcon
    },
    data(){
        return { add }
    },
    computed: {
        results(){
            return this.$store.getters.results; 
        }
    }
    
}
 </script>