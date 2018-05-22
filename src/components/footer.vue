<template>
  <footer>
    <p>{{ copyright }}-{{ title }}</p>
  </footer>
</template>
<script>
  export default {
    name: 'app-footer',
    props:{
      title:{
        type:String
      }
    },
    data() {
      return {
        copyright:"copyright 2017 demo"
      }
    }
  }
</script>
<style>
  footer {
    background: #222222;
    padding: 6px;
  }
  p {
    color: lightgreen;
    text-align: center;
  }
</style>
