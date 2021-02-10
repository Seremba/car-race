<template>
    <ion-item>
         <ion-label>
       {{result.title}}
         </ion-label>
    </ion-item>
</template>
<script>

import { IonItem, IonLabel } from '@ionic/vue'
export default {
props: ['result'],    
components: {
    IonItem,
    IonLabel
}

}
</script>