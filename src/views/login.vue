<template>
  <div class="login">
    <header>
      <img src="./../assets/logo.png" width="32" height="32">
      <span>极影轮滑</span>
      <i> | </i>
      <span>登录</span>
    </header>
    <div class="logIn animated flipInX">
      <a-card title="欢迎登录" :bordered="true" style="width: 370px;height:400px">
        <a-form id='components-form-demo-normal-login' class='login-form'>
          <a-form-item>
            <a-input placeholder='输入账号' v-model="account">
              <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input type='password' placeholder='输入密码' v-model="psd">
              <a-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <div>
              <a-button type='primary' @click='handleSubmit' :loading='loading'>登录</a-button>
              <p class="no_account">
                <span>没有帐号？<router-link to="/register">立即注册</router-link></span>
                <span>管理员？<a href="https://www.xiandandan.xyz" target="_blank">点这里</a></span>
              </p>
            </div>
          </a-form-item>
        </a-form>
        <div class="other_way_login">
          <span>其他登录方式：</span>
          <a-icon type="qq" id="QQ_login" @click="QQ_login"/>
          <a-icon type="wechat" />
          <a-icon type="weibo" />
        </div>
        <a-modal title="QQ登录" :visible="visible" width="628px" :footer="null" :destroyOnClose="true" @cancel="visible = false">
         <iframe src="https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=101511695&redirect_uri=http://192.168.0.105:8080/#/home" frameborder="0" width="100%" height="450"></iframe>
        </a-modal>
      </a-card>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "login",
  data() {
    return {
      loading: false,
      account: "",
      psd: "",
      visible: false,
    };
  },
  created() {
    let id = this.$route.query.id;
    if (id) {
      this.account = id;
    }
  },
  mounted() {
    //  QC.Login.signOut();
    QC.Login(
      {
        btnId: "QQ_login",
        size: "C_S",
        showModal: false
      },
      (res, opt) => {
        console.log(res);
        if (res.ret === 0) {
          this.$router.push({ path: "/" });
        }
      }
    );
  },
  methods: {
    QQ_login(){
      // this.visible = true;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.loading = true;
      if (this.account === "") {
        this.loading = false;
        this.$message.error("请输入账号");
      } else if (this.account !== "" && this.psd === "") {
        this.loading = false;
        this.$message.error("请输入密码");
      } else {
        const _this = this;
        vaptcha({
          //配置参数
          vid: "5b8029e3fc650e9f3011148e", // 验证单元id  正式环境： 5b8029e3fc650e9f3011148e
          type: "invisible" // 展现类型 点击式
        }).then(function(vaptchaObj) {
          vaptchaObj.validate();
          vaptchaObj.listen("pass", function() {
            // 验证成功， 进行登录操作
            let params = {
              account: _this.account,
              psd: _this.psd
            };
            _this.$post("/user/login", params, res => {
              _this.loading = false;
              if (res.code === 1) {
                //   administrator = 管理员； captain = 队长
                _this.$cookies.set("login", true, 60 * 60 * 3);
                let base = {
                  administrator: res.data.administrator === 0 ? false : true,
                  captain: res.data.captain === 0 ? false : true
                };
                window.sessionStorage.setItem("base", JSON.stringify(base)); //存储用户基本信息
                _this.$message.success("登录成功");
                _this.$router.push({
                  path: "/"
                });
              } else {
                _this.$message.error(res.msg);
              }
            });
          });
        });
      }
    }
  },
  components: {
    footerPage: resolve => {
      require(["./../components/bottom.vue"], resolve);
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  > header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    height: 65px;
    margin: auto;
    > i {
      margin: 0 10px;
    }
    > span {
      &:nth-child(2) {
        font-size: 16px;
      }
    }
  }
  .logIn {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 370px;
    height: 400px;
  }
  .no_account {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    a {
      color: #1890ff;
    }
  }
  .admin {
    float: right;
  }
  .other_way_login {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    margin-top: -15px;
    > span {
      font-size: 13px;
    }
    > i {
      position: relative;
      margin-right: 15px;
      cursor: pointer;
      font-size: 16px;
      &:hover {
        color: #1890ff;
      }
      > a {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}
</style>
