<template>
  <div class="home">
    <div class="header">
      <div class="content">
        <div class="logo">
          <img alt="SmartDNS" src="../../public/logo.png" style="transform:scale(2);">
        </div>
        <Button type="info" class="login" @click="login()">登录</Button>
      </div>
    </div>

    <div class="nav">

    </div>

    <div class="lunbo">
      <Carousel v-model="value1" loop>
        <CarouselItem>
          <div class="demo-carousel" >
            <img src="../../public/c1.jpg" alt="" style="width: 100%">
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../../public/c2.jpg" alt="" style="width: 100%">
          </div>
        </CarouselItem>
      </Carousel>
    </div>

    <div class="ci">
      <div class="content">
        <h1>SmartDNS 寻找开发者</h1>
        <h3>加入项目地址https://github.com/users/dollarkillerx/projects/2</h3>
      </div>
    </div>

    <div class="footer">
      <div class="content">
        <div class="footer-title">
          DollarKiller 版权所有 商业支持 联系: dollarkiller#dollarkiller.com
        </div>
      </div>
    </div>
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
    return {
      value1: 0
    }
  },
  mounted() {
    // this.list()
  },
  methods: {
    login() {
      this.$router.push("/login")
    },
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
.header {
  width: 100%;
  height: 68px;
}

.content {
  width: 1600px;
  height: 100%;
  margin: 0 auto;
  /*background: #42b983;*/
}

.logo {
  width: 180px;
  margin-top: 20px;
}

.logo img {
  width: 100%;
}

.login {
  float: right;
  height: 40px;
  margin-top: -35px;
}

.nav {
  height: 40px;
  background-image: linear-gradient(#3C3C3C, #464646, #3C3C3C);
}

.footer {
  border-top: 1px solid #e3e3e3;
  flex: 0 0 auto;
  bottom: 0;
  height: 89px;
  background: white;
  margin-top: 25px;
}

.footer-title {
  font-size: 25px;
  text-align: center;
  line-height: 89px;
}
</style>