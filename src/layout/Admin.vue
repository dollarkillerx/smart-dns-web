<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <router-link to="/">
              <img src="../../public/logo.png" width="100"
                   style="margin-left: -20px;margin-top:-35px;transform:scale(2);">
            </router-link>
          </div>
          <div class="layout-nav">
            <Dropdown>
              <a href="javascript:void(0)" style="color: aliceblue;text-decoration:none;">
                UserInfo
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff',height: scrollerHeight}">
          <NavLayout />
        </Sider>

        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
          <Footer class="layout-footer-center">2020 &copy; Smart DNS Copyright: DollarKiller  https://github.com/users/dollarkillerx/projects/2</Footer>
        </Layout>

      </Layout>
    </Layout>
  </div>
</template>
<script>
import NavLayout from '@/layout/Nav.vue'

export default {
  name: 'Admin',
  data() {
    return {
      // img: require('../../public/favicon.ico')
    }
  },
  components: {
    NavLayout
  },
  computed: {
    // 滚动区高度
    // (业务需求：手机屏幕高度减去头部标题和底部tabbar的高度，当然这2个高度也是可以动态获取的)
    scrollerHeight: function () {
      return (window.innerHeight - 65) + 'px';
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  .layout-logo {
    width: 100px;
    height: 30px;
    //background: #5b6270;
    //background-image: url("../../public/favicon.ico");
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
}
</style>