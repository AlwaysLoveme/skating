<template>
  <!-- 动态 -->
  <div class="trends">
    <section>
      <main>
        <div class="item">
          <div><img src="http://rollerfun.net/data/attachment/block/2a/2abc8c2fdd89ed9f61eceaa40e04ec49.jpg"></div>
          <div class="main">
            <p class="title">(活动发布）2018年西班牙世界杯WIC轮滑马拉</p>
            <div>
              <a-tag color="orange">刷街</a-tag>
            </div>
            <div class="content"> 我国自1982年起正式开展轮滑(“旱冰”)运动，30年来，在社会各界的支持下，轮滑运动得到了快速发展，社会关注度和参与度不断提升。应轮滑爱好者请求，经作者本人同意，中国轮滑协会官方网站现全文刊登秦吉宏同志于2006年撰写的硕士论文《我国轮滑运动发展现状与战略研究》，以...</div>
            <!-- <p class="time">2018-11-03</p> -->
            <p class="check"> <a-button type="primary" ghost>立即查看</a-button></p>
          </div>
        </div>
         <div class="item">
          <div><img src="http://rollerfun.net/data/attachment/block/2a/2abc8c2fdd89ed9f61eceaa40e04ec49.jpg"></div>
          <div class="main">
            <p class="title">(活动发布）2018年西班牙世界杯WIC轮滑马拉</p>
            <div>
              <a-tag color="orange">刷街</a-tag>
            </div>
            <div class="content"> 我国自1982年起正式开展轮滑(“旱冰”)运动，30年来，在社会各界的支持下，轮滑运动得到了快速发展，社会关注度和参与度不断提升。应轮滑爱好者请求，经作者本人同意，中国轮滑协会官方网站现全文刊登秦吉宏同志于2006年撰写的硕士论文《我国轮滑运动发展现状与战略研究》，以...</div>
            <!-- <p class="time">2018-11-03</p> -->
            <p class="check"> <a-button type="primary" ghost>立即查看</a-button></p>
          </div>
        </div>
         <div class="item">
          <div><img src="http://rollerfun.net/data/attachment/block/2a/2abc8c2fdd89ed9f61eceaa40e04ec49.jpg"></div>
          <div class="main">
            <p class="title">(活动发布）2018年西班牙世界杯WIC轮滑马拉</p>
            <div>
              <a-tag color="orange">刷街</a-tag>
            </div>
            <div class="content"> 我国自1982年起正式开展轮滑(“旱冰”)运动，30年来，在社会各界的支持下，轮滑运动得到了快速发展，社会关注度和参与度不断提升。应轮滑爱好者请求，经作者本人同意，中国轮滑协会官方网站现全文刊登秦吉宏同志于2006年撰写的硕士论文《我国轮滑运动发展现状与战略研究》，以...</div>
            <!-- <p class="time">2018-11-03</p> -->
            <p class="check"> <a-button type="primary" ghost>立即查看</a-button></p>
          </div>
        </div>
         <div class="item">
          <div><img src="http://rollerfun.net/data/attachment/block/2a/2abc8c2fdd89ed9f61eceaa40e04ec49.jpg"></div>
          <div class="main">
            <p class="title">(活动发布）2018年西班牙世界杯WIC轮滑马拉</p>
            <div>
              <a-tag color="orange">刷街</a-tag>
            </div>
            <div class="content"> 我国自1982年起正式开展轮滑(“旱冰”)运动，30年来，在社会各界的支持下，轮滑运动得到了快速发展，社会关注度和参与度不断提升。应轮滑爱好者请求，经作者本人同意，中国轮滑协会官方网站现全文刊登秦吉宏同志于2006年撰写的硕士论文《我国轮滑运动发展现状与战略研究》，以...</div>
            <!-- <p class="time">2018-11-03</p> -->
            <p class="check"> <a-button type="primary" ghost>立即查看</a-button></p>
          </div>
        </div>
      </main>
      <aside>
        <a-affix :offsetTop="0">
          <a-button type="primary">
            Fixed at the top of container
          </a-button>
        </a-affix>
      </aside>
    </section>
  </div>
</template>

<script>
export default {
  name: "trends"
};
</script>

<style scoped lang="less">
.trends {
  width: 100%;
  transform: none;
  > section {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 1190px;
    margin: auto;
     padding: 15px 0;
    >main{
      flex: 1;
      >.item{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        height: 260px;
        margin-bottom: 20px;
        border: solid 1px #e8e8e8;
        padding: 0;
        >div:first-child{
          width: 430px;
          height: 258px;
          overflow: hidden;
          padding: 0;
          margin-right: 10px;
          >img{
            width: 100%;
            height: auto;
          }
        }
        >div.main{
          width: 350px;
          flex: 1;
          >p.title{
            font-size: 20px;
            width: 80%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0;
            padding-top: 10px;
          }
          >div:nth-child(2){
            margin: 10px 0;
          }
          >div.content{
            width: 90%;
            height: 126px;
            margin: 5px 0;
          }
          >p.check{
            width: 200px;
            margin: 0;
          }
        }
      }
    }
    >aside{
      width: 320px;
      height: auto;
      margin-left: 10px;
      transform: none;
    }
  }
}
</style>
