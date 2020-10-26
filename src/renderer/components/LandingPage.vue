<template>
  <div id="wrapper">
    <a-button type="danger" @click="clickTest">dangre</a-button>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      clickTest() {
        this.$message.info('This is a normal message')
      }
    }
  }
</script>

<style>
</style>
