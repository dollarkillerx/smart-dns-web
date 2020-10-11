<template>
  <div class="home">
<!--    <img class="product-intro__image position-relative " src="https://www.arvancloud.com/images/pages/dns/wide-as-world.svg" alt="Managed DNS Hosting" draggable="false">-->
    <img alt="SmartDNS" src="../../public/logo.png" style="transform:scale(2);">
<!--    <HelloWorld msg="SmartDNS"/>-->
    <p>
      SmartDNS  寻找开发者
      <br>
      加入项目地址https://github.com/users/dollarkillerx/projects/2
      <br>
    </p>
    <br>
    <br>
    <br>
    <a href="/login">登录服务</a>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {}
  },
  mounted() {
    this.list()
  },
  methods: {
    list() {
      this.$api.user.login({
        "email": "dollarkiller@dk.com",
        "password": "dollarkiller"
      })
          .then(res => {
            console.log(res.data)
            if (!res.success) {
              this.$Message.error(res.message)
            }
            this.$Message.success(JSON.stringify(res.data))
          }).catch(err => {
        console.log(err)
        this.$Message.error(JSON.stringify(err))
      })
    }
  }
}
</script>

<style scoped>
.product-intro__image {

}
</style>