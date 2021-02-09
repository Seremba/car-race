<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      
      <ion-item>
        <ion-label position="floating">Position</ion-label>
        <ion-input type="text" required v-model="enteredDriverPosition" />
      </ion-item>

      <ion-item>
        <ion-label position="floating">Points</ion-label>
        <ion-input type="text" required v-model="enteredPoints" />
      </ion-item>

      <ion-item>
        <ion-label position="floating">Laps</ion-label>
        <ion-input type="text" required v-model="enteredLaps" />
      </ion-item>

      <ion-item>
        <ion-label position="floating">Final</ion-label>
        <ion-input type="text" required v-model="enteredNumber" />
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Enter Result</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";

export default {
  emits: ["save-memory"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  data() {
    return {
      enteredTitle: "",
      enteredDriverPosition: "",
      enteredPoints: "",
      enteredLaps: "",
      enteredNumber: ""
    };
  },
  
    submitForm() {
      const resultData = {
        title: this.enteredTitle,
        driverPosition: this.enteredDriverPosition,
        points: this.enteredPoints,
        laps: this.enteredLaps,
        number: this.enteredNumber
        };
      this.$emit("save-result", resultData);
    },
  }
</script>