<template>
    <div>
      <h1>用户模块</h1>
      <table border="1">
        <tr>
          <td>编号</td>
          <td>姓名</td>
          <td>年龄</td>
          <td>操作</td>
        </tr>
        <tr v-for="user in users">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.age}}</td>
          <td><a href="">删除</a><a href="">修改</a></td>
        </tr>
      </table>

      <Footer></Footer>
    </div>
</template>

<script>
  import Footer from "./Footer";
    export default {
        name: "User",
      data() {
        return {
          users:[
            {id:1,name:"池易洙",age:23},
            {id:2,name:"张三",age:33}
          ]
        }
      },
      methods: {},
      components: {
        Footer,
      }
    }
</script>

<style scoped>

</style>
