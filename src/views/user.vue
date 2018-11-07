<template>
    <!-- 用户中心 -->
    <div class="user">
        <img :src="src" alt=""> <span>{{nickName}}</span>
        <div id="QQ_login"></div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "user",
  data() {
    return {
        src: '',
        nickName: ""
    };
  },
  created() {
    QC.Login(
      {
        btnId: "QQ_login",
        size: "C_S",
        showModal: false
      },
      (res, opt) => {
        if (res.ret === 0) {
            this.src = res.figureurl_2;
            this.nickName = res.nickname;
        //   this.$router.push({ path: "/" });
        }
      }
    );
  },
  methods: {}
};
</script>

<style lang="less" scoped>
</style>


