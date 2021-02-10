<template>
    <base-lay-out page-title="Add Race Results">
    <create-result-form 
    @save-result="saveResult"
    ></create-result-form>
    </base-lay-out>
</template>

<script>
import CreateResultForm from '../components/results/CreateResultForm.vue'
import BaseLayOut from '../components/base/BaseLayOut.vue'
export default {
  components: { 
      BaseLayOut 
  },
  methods: {
      saveResult(resultData){
          this.$store.dispatch('addResult', resultData);
          this.$router.replace('/results');
      }
  }   
}
</script>