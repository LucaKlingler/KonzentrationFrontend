<template>
  <b-container>
    <b-row>
      <b-col>
        <b-input type='text' placeholder='email' v-model='email'/> 
        <b-input type='password' placeholder='password' v-model='password'/> 
        <b-button variant='primary' @click='login'>Log In</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name:'Login', 
  data(){
    return{
      email:'',
      password:'',
    }
  },
  methods:{
    login(){
      if(this.email==='luca@test.com' && this.password==='horsestaplebatterypower'){
        alert('logged in succesfully'); 
      }else{
        alert('du komsch hier ned rein');
      }
    }
  }
}
</script>

<style>

</style>