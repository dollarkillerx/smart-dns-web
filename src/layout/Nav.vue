<template>
    <Menu active-name="1" theme="light" width="auto" :open-names="['1']">
      <MenuItem name="1"  to="/admin">
        <Icon type="ios-home"></Icon>
        主页
      </MenuItem>
      <MenuItem name="2">
        <Icon type="md-clipboard" />
        域名管理
      </MenuItem>
      <MenuItem name="3">
        <Icon type="ios-link" />
        域名接入
      </MenuItem>
      <Submenu name="4">
        <template slot="title">
          <Icon type="ios-navigate"></Icon>
          防火墙设置
        </template>
        <MenuItem name="4-1">
          <Icon type="ios-outlet" />
          IP防火墙
        </MenuItem>
      </Submenu>
      <MenuItem name="5">
        <Icon type="md-help-buoy" />
        专属错误页
      </MenuItem>
    </Menu>
</template>

<script>
export default {
  name: "NavLayout",
  computed: {
    // 滚动区高度
    // (业务需求：手机屏幕高度减去头部标题和底部tabbar的高度，当然这2个高度也是可以动态获取的)
    scrollerHeight: function () {
      return (window.innerHeight - 65) + 'px';
    }
  }
}
</script>

<style scoped>

</style>