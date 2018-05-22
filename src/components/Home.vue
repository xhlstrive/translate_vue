<!-- 模板 -->
<template>
  <div id="Home">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!-- 行为 -->
<script>
  import Users from './users'
  import Header from './header'
  import Footer from './footer'
  export default {
    name: 'Home',
    data() {
      return {
        //title : "这是我的第一个vue脚手架"
        users : [
          {
            name : "herry",
            position : "web开发",
            show : false
          },
          {
            name : "herry",
            position : "web开发",
            show : false
          },
          {
            name : "herry",
            position : "web开发",
            show : false
          },
          {
            name : "herry",
            position : "web开发",
            show : false
          }
        ],
        title : "传递的是一个值，（number string boolean）"
      }
    },
    methods:{
      updateTitle(title){
        this.title = title
      }
    },
    components : {
      "users": Users,
      "app-header":Header,
      "app-footer":Footer
    },
    beforeCreate: function () {
      console.log("create 前")
    },
    Created:function () {
      console.log("组件实例化完毕，页面还未显示")
    }
  }
</script>

<!-- 样式 -->
<style scroped>
  h1 {
    color: green;
  }
</style>
