<template>
   <ion-list>
       <result-list-item
       v-for="result in results"
       :key="result.id"
       :result="result"
       ></result-list-item>
   </ion-list> 
</template>

<script>
import{ IonList} from '@ionic/vue';
import ResultListItem from './ResultListItem.vue';
export default {
    props: ["results"],
    components: {
        IonList,
        ResultListItem
    }
    
}
</script>