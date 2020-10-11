<template>
  <div class="login">
    <div class="login-con">
      <Card style="width: 360px">
        <p slot="title">欢迎登录</p>
        <Form :model="form">
          <FormItem prop="email">
            <Input type="text" v-model="form.email" placeholder="please input email">
              <Icon type="ios-mail" slot="prepend"/>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="please input password">
              <Icon type="md-lock" slot="prepend"/>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="login" long >Login</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        // loading: false,
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      // this.loading = true;
      this.$Spin.show();
      let res = await this.$api.user.login(this.form)
      if (res) {
        this.$router.push('/');
      }
      // this.loading = false;
      this.$Spin.hide();
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url("../../../public/bg.jpg");
  background-size: cover;
  background-position: 50%;
  position: relative;
}

.login-con {
  position: absolute;
  right: 160px;
  top: 50%;
  transform: translateY(-60%);
  width: 300px;
}
</style>