<template>
  <div class="users">
    <h1>users</h1>
    <form action="" v-on:submit="adduser">
      <input type="text" v-model="newUser.name" placeholder="Enter name" />
      <input type="text" v-model="newUser.email" placeholder="Enter email" />
      <input type="submit" value="submit">
    </form>
    <ul>
      <li v-for="user in users">{{user.name}}-{{user.email}}</li>
      <button v-on:click="deleteUser">删除</button>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'users',
    data() {
      return {
        newUser:{},
        users:[
          {
            name:"hanmeimei",
            email:"hanmeimei@sina.com",
            contacted:true
          },
          {
            name:"hanmeimei2",
            email:"hanmeimei@sina.com",
            contacted:true
          },
          {
            name:"hanmeimei3",
            email:"hanmeimei@sina.com",
            contacted:true
          }
        ]
      }
    },
    methods:{
      adduser:function (e) {
        //console.log("hello");
        //e.preventDefault();
        this.users.push({
          name:this.newUser.name,
          email:this.newUser.email,
          contacted:false
        });
        e.preventDefault();
      },
      deleteUser:function () {
        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
