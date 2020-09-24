<template>
  <div>
    <h1>用户添加信息</h1>
    <form action="">
      用户名 <input v-model="user.name" type="text"><br>
      年龄 <input v-model="user.age" type="text"><br>
      生日 <input v-model="user.bir" type="text"><br>
      <input type="button" @click="saveUserInfo" value="添加用户信息">
    </form>
  </div>
</template>

<script>
  export default {
    name: "UserAdd",
    data() {
      return {
        user: {}
      }
    },
    methods: {
      saveUserInfo() {
        console.log(this.user);//打印查看当前的信息是否成功发送，可以不写，注释掉
        //发送axios请求
        this.$http.post("http://localhost:8081/vue/user/add",this.user).then((res) => {
          //请注意，如果是post请求，务必在url之后加上指定对象，不然存不上数据
          console.log(res.data);//打印信息
          if (res.data.success) {
            this.$router.push("/user");//切换路由
          }

        })
      }
    }
  }
</script>

<style scoped>

</style>
