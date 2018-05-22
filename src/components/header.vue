<template>
		<header v-on:click="changetitle">
      <h1>{{ title1 }}{{ title }}</h1>
    </header>
</template>
<script>
  export default {
    name: 'app-header',
    props:{
      title:{
        type:String
      }
    },
    data() {
      return {
        title1:"vuejs.demo"
      }
    },
    methods:{
      changetitle:function () {
        //this.title = "changed"
        this.$emit("titleChanged","子向父传值")
      }
    }
  }
</script>
<style>
	header {
		background: lightgreen;
    padding: 10px;
	}
  h1 {
    color: #222;
    text-align: center;
  }
</style>
