<template>
    <!-- 页脚 -->
    <div class="footer">
        <p>© 2018 极影轮滑 版权所有</p>
    </div>
</template>

<script>
export default {
    name: 'footer_'

}
</script>

<style scoped lang='less'>
.footer{
    width: 100%;
    height: 100px;
    background: rgba(0, 0, 0, 0.104);
    display: flex;
    align-items: center;
    justify-content: center;
    >p{
        margin: 0;
    }
}
</style>
