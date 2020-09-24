<template>
  <div>
    <h1>欢迎来到主页</h1>
    <div style="background-color: aqua;width: 100%;height: 300px;">
      内容
    </div>

    <!--使用组件-->
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "./Footer";//引入组件

  export default {
    name: "Home",
    data() {
      return {}
    },
    methods: {},
    components: {
      Footer,
    }
  }
</script>

<style scoped>

</style>
