<template>
    <!-- 底部信息 -->
    <div class="bottom">
        <div>
            <p>
                <router-link to="/">首页</router-link>
            </p>
            <p>
                <router-link to="/about">关于我们</router-link>
            </p>
            <p>|</p>
            <p>简体中文</p>
            <p>英文</p>
        </div>
        <div>© 2018 JiYingSkating All Rights Reserved</div>
    </div>
</template>
<script>
export default {
  name: "bottom"
};
</script>

<style lang="less" scoped>
.bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 300px;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    font-size: 12px;
    color: #333;
    > p {
      font-size: 12px;
      cursor: pointer;
      > a {
        font-size: 12px;
        color: #333;
      }
    }
    &:last-child{
        justify-content: center;
    }
  }
}
</style>

