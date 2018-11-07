<template>
    <div class="nav">
         <div id="QQ_login"></div>
        <a-row>
            <a-col :span="4">
                <p class="logo">
                    <img src="./../assets/logo.png" alt="">
                    <span>极影轮滑</span>
                </p>
            </a-col>
            <a-col :span="16">
                <a-menu v-model="current" mode="horizontal" @select='item'>
                    <a-menu-item key="home">
                        <a-icon type="home" />
                        <router-link to="/home">首页</router-link>
                    </a-menu-item>
                    <a-menu-item key="trends">
                        <a-icon type="tag-o" />
                        <router-link to="/trends">协会动态</router-link>
                    </a-menu-item>
                    <a-menu-item key="course">
                        <a-icon type="hdd" />
                        <router-link to="/course">轮滑教程</router-link>
                    </a-menu-item>
                    <a-menu-item key="announcement">
                        <a-icon type="notification" />
                        <router-link to='/announcement'>公告中心</router-link>
                    </a-menu-item>
                    <a-menu-item key="video">
                        <a-icon type="video-camera" />
                        <router-link to='/video'>视频中心</router-link>
                    </a-menu-item>
                    <!-- <a-menu-item key="about">
                        <a-icon type="team" /> <router-link to='/about'>关于我们</router-link> 
                    </a-menu-item> -->
                </a-menu>
            </a-col>
            <a-col :span='4' class="login_box">
                <p class="login" v-if="!login">
                    <router-link to='/login'>
                        <a-icon type="user" /> 登录</router-link>
                    <router-link to='/register'>
                        <a-icon type="user-add" /> 注册</router-link>
                </p>
                <div v-else>
                    <a-dropdown placement="bottomCenter">
                        <span class="user">
                            <router-link to="/user"><img :src="user" width="32"></router-link>
                        </span>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <router-link to="/user">个人中心</router-link>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;" @click="logout">退出登录</a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Nav_",
  data() {
    return {
      current: [],
      login: false,
      user: "https://www.xiandandan.xyz/images/timg.jpg"
    };
  },
  mounted(){
    QC.Login(
      {
        btnId: "QQ_login",
        size: "C_S"
      },
      (res, opt) => {
        if (res.ret === 0) {
          this.login = true;
          this.user = res.figureurl_2;
        }
      }
    );
  },
  created() {
    let path = this.$route.path;
    path = path.substring(path.indexOf("/") + 1, path.length);
    this.current.push(path);
    if (this.$cookies.get("login")) {
      this.login = true;
    }
  },
  methods: {
    item(item) {
      this.current = [];
      this.current = item.key;
    },
    logout() {
      this.login = false;
      this.$router.push({ path: "/" });
      this.$cookies.remove("login");
      // QQ登出
      QC.Login.signOut();
    }
  }
};
</script>

<style scoped lang='less'>
.nav {
  width: 100%;
  min-width: 1190px;
  height: 64px;
  margin: 0 auto;
  border-bottom: solid 1px #e8e8e8;
  .logo {
    display: flex;
    align-items: center;
    width: 140px;
    height: 64px;
    // margin: 0 auto;
    > img {
      width: 45px;
      height: auto;
    }
    > span {
      font-size: 18px;
    }
  }
  .login_box {
    display: flex;
    justify-content: flex-end;
  }
  .login {
    display: flex;
    align-items: center;
    height: 64px;
    justify-content: flex-end;
    width: 140px;
    > a:first-child {
      margin-right: 15px;
    }
  }
  > .ant-row {
    width: 1190px;
    margin: auto;
  }
  .user {
    display: block;
    > a {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      > img {
        width: 32px;
        height: 32px;
        border-radius: 100%;
        box-shadow: 0 0 2px #aaa;
        cursor: pointer;
      }
    }
  }
}
</style>
