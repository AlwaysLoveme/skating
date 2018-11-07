<template>
  <div class="index">
    <a-layout>
      <a-layout-header>
        <navigation></navigation>
      </a-layout-header>
      <a-layout-content>
          <router-view class="animated fadeIn"></router-view>
      </a-layout-content>
    </a-layout>
    <footerPage></footerPage>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {},
  components: {
    navigation: resolve => {
      require(["./../components/nav"], resolve);
    },
    footerPage: resolve => {
      require(['./../components/footer'], resolve)
    }
  }
};
</script>

<style lang='less' scoped>
.index {
  width: 100%;
  > header {
    width: 100%;
    height: 60px;
    border-bottom: solid 1px #e8e8e8;
  }
}
</style>