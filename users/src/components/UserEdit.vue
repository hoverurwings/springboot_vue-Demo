<template>
  <div>
    <h2>编辑用户信息</h2>
    <form action="">
      用户名：<input v-model="user.name" type="text"><br>
      <!-- 通过axios发送请求获得rap2提供的后端数据后，需要进行回显。可以通过绑定数据完成   -->
      年龄：<input v-model="user.age" type="text"><br>
      生日：<input v-model="user.bir" type="text"><br>
      <input type="button" @click="editUserInfo" value="添加">
    </form>
  </div>
</template>

<script>
  export default {
    name: "UserEdit",
    data() {
      return {
        user: {//3.定义一个user对象，以方便接收create里面跨组件传过来的参数
          id: "",//4.定义对象里面有id
        }
      }
    },
    methods: {
      findOne() {
        //6.定义一个findOne方法根据拿来的id发送一个请求
        this.$http.get("http://localhost:8081/vue/user/findOne?id=" + this.user.id).then((res) => {
          console.log(res);
          this.user = res.data;//通过axios取得数据
        });
      },
      editUserInfo(){
        this.$http.post("http://localhost:8081/vue/user/update",this.user).then((res)=>{
          console.log(res);
          if(res.data.success){
            this.$router.push("/user");
          }
        })
      }
    },
    created() {
      console.log("修改组件中获取的id：" + this.$route.query.id);//1.在页面中点击修改的时候，就把要修改的id给传 出来了。
      //2.要获取这个id,要进行跨组件取参数：this.$route.query.id
      this.user.id = this.$route.query.id;//5.把传过来的参数id给到定义的user对象的id
      this.findOne();
    }
  }
</script>

<style scoped>

</style>
