<template>
  <div class="register">
    <header>
      <img src="./../assets/logo.png" width="32" height="32">
      <span>极影轮滑</span>
      <i> | </i>
      <span>注册</span>
    </header>
    <div class="logIn animated flipInX">
      <a-card title="欢迎注册" :bordered="true" style="width: 370px;height:400px">
        <a-form id='components-form-demo-normal-login' class='login-form'>
          <a-form-item>
            <a-input placeholder='输入手机号' v-model="account">
              <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input type='password' placeholder='输入密码' v-model="psd">
              <a-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input type='password' placeholder='确认密码' v-model="con_psd">
              <a-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <div>
              <a-button type='primary' @click='handleSubmit' :loading='loading' id="vaptchaContainer">注册</a-button>
              <p class="no_account">
                <span>已有帐号？<router-link to="/login">立即登录</router-link></span>
                <span>管理员？<a href="https://www.xiandandan.xyz" target="_blank">点这里</a></span>
              </p>
            </div>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
    <footerPage></footerPage>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "register",
  data() {
    return {
      loading: false,
      account: "", //用户名
      psd: "", //密码
      con_psd: "" //确认密码
    };
  },
  mounted() {},
  methods: {
    handleSubmit() {
      const _this = this;
      if (this.account === "") {
        this.loading = false;
        this.$message.error("请输入手机号");
      } else if (this.psd === "") {
        this.loading = false;
        this.$message.error("请输入密码");
      } else if (this.con_psd === "") {
        this.loading = false;
        this.$message.error("请确认密码");
      } else if (this.psd !== this.con_psd) {
        this.loading = false;
        this.$message.error("两次密码不一致");
      } else {
        vaptcha({
          //配置参数
          vid: "5b8029e3fc650e9f3011148e", // 验证单元id  正式环境： 5b8029e3fc650e9f3011148e 测试环境： 5b8cb2bffc650e8c10470650
          type: "invisible" // 展现类型 点击式
        }).then(function(vaptchaObj) {
          // let obj = vaptchaObj; //将VAPTCHA验证实例保存到局部变量中
          vaptchaObj.validate();
          vaptchaObj.listen("pass", function() {
            // 验证成功进行后续操作
            let params = {
              account: _this.account,
              psd: _this.psd
            };
            _this.$post("/user/register", params, res => {
              if (res.code === 1) {
                _this.$message.success("注册成功，请登录");
                _this.$router.push({
                  path: "/login",
                  query: { id: _this.account }
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
.register {
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
      margin-right: 15px;
      cursor: pointer;
      font-size: 16px;
      &:hover {
        color: #1890ff;
      }
    }
  }
}
</style>
