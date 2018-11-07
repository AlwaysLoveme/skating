<template>
  <!--首页-->
  <div class="home">
    <div class="banner">
      <a-carousel arrows autoplay>
        <div slot="prevArrow" slot-scope="props" class="custom-slick-arrow" style="left: 20px;zIndex: 1">
          <a-icon type="left-circle" />
        </div>
        <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 25px">
          <a-icon type="right-circle" />
        </div>
        <div>
          <router-link to="/"><img src="./../assets/banner.png" width="100%"></router-link>
        </div>
        <div>
          <router-link to="/"><img src="./../assets/banner_1.png" width="100%"></router-link>
        </div>
        <div>
          <router-link to="/"><img src="./../assets/7906e907-afb1-446d-a356-ceabc742b1e2.png" width="100%"></router-link>
        </div>
      </a-carousel>
    </div>
    <!-- 公告 -->
    <div class="notice"></div>
    <div class="main">
      <!-- 社团动态 -->
      <div class="news">
        <header class="title">
          <span>协会动态</span>
          <span class="more">MORE>></span>
        </header>
        <div class="img"><img src="./../assets/banner_2.png"></div>
        <ul>
          <li>
            <span>[精]</span>
            <p>
              <router-link to="/">爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持</router-link>
            </p>
            <span>2018-10-19</span>
          </li>
          <li>
            <span>[精]</span>
            <p>
              <router-link to="/">爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持</router-link>
            </p>
            <span>2018-10-19</span>
          </li>
          <li>
            <span>[精]</span>
            <p>
              <router-link to="/">爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持</router-link>
            </p>
            <span>2018-10-19</span>
          </li>
          <li>
            <span class="disc">·</span>
            <p>
              <router-link to="/">爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持</router-link>
            </p>
            <span>2018-10-19</span>
          </li>
          <li>
            <span class="disc">·</span>
            <p>
              <router-link to="/">爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持</router-link>
            </p>
            <span>2018-10-19</span>
          </li>
          <li>
            <span class="disc">·</span>
            <p>
              <router-link to="/">爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持爱轮滑的人都有一份难得的坚持</router-link>
            </p>
            <span>2018-10-19</span>
          </li>
          <li>
            <a-pagination @change="onChange" :current="current" :total="20" :pageSize="6" />
          </li>
        </ul>
      </div>
      <div class="recommend">
        <!-- 社团推荐 -->
        <div>
          <header class="title">
            <span>协会推荐</span>
            <span class="more">
              <router-link to="/">MORE>></router-link>
            </span>
          </header>
          <ul>
            <li>
              <span class="ac_">1</span>
              <p>
                <router-link to="/">2016-2017 届轮滑协会换届大会成功举行</router-link>
              </p>
              <span>2018-10-20</span>
            </li>
            <li>
              <span class="ac_">2</span>
              <p>
                <router-link to="/">2016-2017 届轮滑协会换届大会成功举行</router-link>
              </p>
              <span>2018-10-20</span>
            </li>
            <li>
              <span>3</span>
              <p>
                <router-link to="/">2016-2017 届轮滑协会换届大会成功举行</router-link>
              </p>
              <span>2018-10-20</span>
            </li>
            <li>
              <span>4</span>
              <p>
                <router-link to="/">2016-2017 届轮滑协会换届大会成功举行</router-link>
              </p>
              <span>2018-10-20</span>
            </li>
            <li>
              <span>5</span>
              <p>
                <router-link to="/">2016-2017 届轮滑协会换届大会成功举行</router-link>
              </p>
              <span>2018-10-20</span>
            </li>
          </ul>
        </div>
        <!-- 社团之星 -->
        <div class="star">
          <header class="title">
            <span>协会理事</span>
            <span class="more">
              <router-link to="/">MORE>></router-link>
            </span>
          </header>
          <figure>
            <div><img src="http://up.qqjia.com/z/13/tu14996_13.jpg"></div>
            <figcaption>
              <p><span>职位：</span> <span>会长</span> </p>
              <p><span>姓名：</span> <span>张幸雅</span> </p>
              <p><span>学院：</span> <span>艺术学院</span></p>
              <p><span>专业：</span> <span>XXXXXXX</span></p>
              <p><span>评价：</span><span class="intro" title="此人生性活泼，责任心强，拥有一股霸道的男人气质却是一个“弱女子”皮囊，轮滑协会在他的带领下，日渐气盛，轮滑氛围贼6，不仅身兼轮滑协会会长，还是校园移动公司校成员的“眼中钉”，因为她太会抢生意啦，哈哈哈哈">此人生性活泼，责任心强，拥有一股霸道的男人气质却是一个“弱女子”皮囊，轮滑协会在他的带领下，日渐气盛，轮滑氛围贼6，不仅身兼轮滑协会会长，还是校园移动公司校成员的“眼中钉”，因为她太会抢生意啦，哈哈哈哈</span></p>
            </figcaption>
          </figure>
          <figure>
            <div><img src="http://up.qqjia.com/z/13/tu14996_13.jpg"></div>
            <figcaption>
              <p><span>职位：</span> <span>会长</span> </p>
              <p><span>姓名：</span> <span>张幸雅</span> </p>
              <p><span>学院：</span> <span>艺术学院</span></p>
              <p><span>专业：</span> <span>XXXXXXX</span></p>
              <p><span>评价：</span><span class="intro" title="此人生性活泼，责任心强，拥有一股霸道的男人气质却是一个“弱女子”皮囊，轮滑协会在他的带领下，日渐气盛，轮滑氛围贼6，不仅身兼轮滑协会会长，还是校园移动公司校成员的“眼中钉”，因为她太会抢生意啦，哈哈哈哈">此人生性活泼，责任心强，拥有一股霸道的男人气质却是一个“弱女子”皮囊，轮滑协会在他的带领下，日渐气盛，轮滑氛围贼6，不仅身兼轮滑协会会长，还是校园移动公司校成员的“眼中钉”，因为她太会抢生意啦，哈哈哈哈</span></p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <!-- 轮滑之星 -->
    <div class="skat-star">
      <div class="main">
        <header class="title">
          <span class="title">轮滑之星</span>
          <span class="more">
            <router-link to="/">MORE>></router-link>
          </span>
        </header>
        <div class="starMain">
          <a-card hoverable style="width: 360px">
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <template class="ant-card-actions" slot="actions">
              <a-icon type="like-o" />
              <a-icon type="message" />
              <a-icon type="ellipsis" />
            </template>
            <a-card-meta>
              <div slot="description" class="description">
                <ul>
                  <li><span>姓 名：</span><span>张涛</span></li>
                  <li><span>星指数：</span>
                    <a-rate :defaultValue="2" disabled />
                  </li>
                  <li><span>所属队伍：</span><span>7队</span></li>
                  <li><span>所属星语：</span><span class="comments">一周内学会了三个平花基础动作，与人和善，乐于教协会其他人技术，喜分享技术，甚好甚好</span></li>
                </ul>
              </div>
            </a-card-meta>
          </a-card>
          <a-card hoverable style="width: 360px">
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <template class="ant-card-actions" slot="actions">
              <a-icon type="like-o" />
              <a-icon type="message" />
              <a-icon type="ellipsis" />
            </template>
            <a-card-meta>
              <div slot="description" class="description">
                <ul>
                  <li><span>姓 名：</span><span>张涛</span></li>
                  <li><span>星指数：</span>
                    <a-rate :defaultValue="2" disabled />
                  </li>
                  <li><span>所属队伍：</span><span>7队</span></li>
                  <li><span>所属星语：</span><span class="comments">一周内学会了三个平花基础动作，与人和善，乐于教协会其他人技术，喜分享技术，甚好甚好</span></li>
                </ul>
              </div>
            </a-card-meta>
          </a-card>
          <a-card hoverable style="width: 360px">
            <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
            <template class="ant-card-actions" slot="actions">
              <a-icon type="like-o" />
              <a-icon type="message" />
              <a-icon type="ellipsis" />
            </template>
            <a-card-meta>
              <div slot="description" class="description">
                <ul>
                  <li><span>姓 名：</span><span>张涛</span></li>
                  <li><span>星指数：</span>
                    <a-rate :defaultValue="2" disabled />
                  </li>
                  <li><span>所属队伍：</span><span>7队</span></li>
                  <li><span>所属星语：</span><span class="comments">一周内学会了三个平花基础动作，与人和善，乐于教协会其他人技术，喜分享技术，甚好甚好</span></li>
                </ul>
              </div>
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </div>
    <!-- 留言板 -->
    <div class="messagebord">
      <div>
        <div>
          <h2>九江学院极影轮滑协会</h2>
          <div class="desc">九江学院极影轮滑协会成立于2005年，历经10多年的风风雨雨，我们已经成长为一个强大的团体，我们的宗旨是推广轮滑运动，提高成员技术水平，培养轮滑精英，以兴趣为基础，从实际出发，克服困难，加强沟通交流，充实大学生活。轮滑具有健身行，娱乐性，方便性，安全性等为一体的体育运动，轮滑正是这样一项体育运动，他可以有效提高心理素质和健康水平，融健身性与娱乐性于一体，不受场地和气候等条件的约束，具有丰富的竞技性与趣味性，对于心理和生理训练益处颇多。轮滑协会是九江学院极具特色的社团，定期进行轮滑教学，主要分为自由式轮滑，平地花式，花式刹停。除了日常的训练、活动、刷街，常与各大高校进行联谊活动。</div>
        </div>
        <div>
          <p><i>*</i><span>姓名：</span>
            <a-input placeholder="请输入姓名" />
          </p>
          <p><i>*</i><span>邮箱：</span>
            <a-input placeholder="请输入邮箱" />
          </p>
          <p><i>*</i><span>留言：</span>
            <a-textarea placeholder="请输入您的留言" :autosize="{ minRows: 2, maxRows: 6 }" />
          </p>
          <p><i></i><span></span><a-button type="primary">提交留言</a-button></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "home",
  data() {
    return {
      current: 1
    };
  },
  created(){
  },
  methods: {
    onChange(page) {
      this.current = page;
    }
  },
  components:{
    footerPage: resolve => {
      require(['./../components/footer'],resolve)
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  > div.banner {
    width: 100%;
    min-width: 1190px;
  }
  header.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 19px;
    padding: 0 0 0 10px;
    border-left: solid 3px #1890ff;
    > span {
      color: #1890ff;
      font-size: 16px;
      &:last-child {
        font-size: 13px;
        cursor: pointer;
        > a {
          font-size: 13px;
          color: #1890ff;
        }
      }
    }
  }
  > div.main {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1190px;
    margin: 40px auto;
    > .news {
      width: 562px;
      > div.img {
        width: 100%;
        height: 180px;
        padding: 0;
        margin: 15px 0;
        overflow: hidden;
        > img {
          width: 100%;
          height: auto;
        }
      }
      > ul {
        width: 100%;
        margin: 10px 0;
        > li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 70px;
          list-style-type: none;
          > span {
            &.disc {
              width: 8px !important;
              height: 8px !important;
              background: #999;
              border-radius: 100%;
              margin-right: 12px !important;
              margin-left: 5px;
            }
            &:first-child {
              display: block;
              width: 20px;
              color: #f5222d;
              font-size: 12px;
              margin-right: 5px;
            }
            &:last-child {
              font-size: 13px;
              color: #999;
            }
          }
          > p {
            flex: 1;
            margin: 0 15px 0 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            > a {
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
    > .recommend {
      width: 462px;
      height: auto;
      background: #f3f7fa;
      padding: 20px;
      > div:first-child > ul {
        width: 100%;
        margin: 10px 0;
        > li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          list-style-type: none;
          width: 100%;
          height: 50px;
          > span {
            display: block;
            width: 15px;
            height: 15px;
            text-align: center;
            line-height: 15px;
            background: #aaa;
            color: #fff;
            font-size: 13px;
            &.ac_ {
              background: #f5222d;
            }
            &:last-child {
              width: 70px;
              background: none;
              color: #999;
            }
          }
          > p {
            flex: 1;
            margin: 0 30px 0 5px;
          }
        }
      }
      > div:last-child > figure {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        margin: 15px 0;
        > div {
          width: 150px;
          height: 150px;
          overflow: hidden;
          > img {
            width: 100%;
            height: auto;
          }
        }
        > figcaption {
          width: 260px;
          margin-left: 10px;
          > p {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            margin: 0 0 5px 0;
            // >span:first-child{
            //   // display: block;
            //   // width: 45px;
            // }
            > span:last-child.intro {
              width: 198px;
              height: 45px;
              line-height: 23px;
              word-break: break-all;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              text-align: justify;
            }
          }
        }
      }
    }
  }
  > .skat-star {
    width: 1190px;
    height: auto;
    margin: 25px auto;
    > .main {
      width: 100%;
      height: auto;
      // > header {
      //   width: 100%;
      //   height: 45px;
      //   border-bottom: solid 1px #1890ff;
      //   padding: 0;
      //   > p {
      //     width: 120px;
      //     // height: 100%;
      //     text-align: center;
      //     line-height: 45px;
      //     background: #1890ff;
      //     color: #fff;
      //     font-size: 16px;
      //     margin: 0;
      //   }
      // }
      > .starMain {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        > div {
          margin: 25px 0;
          .description {
            width: 100%;
            > ul {
              width: 100%;
              > li {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 100%;
                min-height: 35px;
                > span.comments {
                  width: 230px;
                  height: 60px;
                  line-height: 20px;
                  word-break: break-all;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3;
                  overflow: hidden;
                  text-align: justify;
                }
                &:last-child {
                  align-items: flex-start;
                }
              }
            }
          }
        }
      }
    }
  }
  > .messagebord {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 535px;
    padding: 20px 0;
    background: url('./../assets/AD0I9I3-BRACGAAg3f7cwwUoo6rJ2gYwgA84nAQ.jpg') no-repeat center;
    > div {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 1190px;
      margin: auto;
      >div{
        &:first-child{
          width: 500px;
          >h2{
            font-size: 25px;
            color: rgb(197, 197, 197);
          }
          >.desc{
            width: 100%;
            text-align: left;
            color: rgb(197, 197, 197);
            line-height: 20px;
            letter-spacing: 2px;
          }
        }
        &:last-child{
          width: 500px;
          >p{
            display: flex;
            align-items: flex-start;
            justify-content:flex-start;
            color: rgb(197, 197, 197);
            margin-bottom: 30px;
            >i{
              font-style: normal;
              color: red;
            }
            >span{
              display: flex;
              width: 45px;
            }
            >input,>textarea{
              width: 85%;
            }
            >button{
              width: 150px;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}
.ant-carousel > .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
.ant-carousel .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #333;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  > i {
    font-size: 35px;
    color: #fff;
  }
}
.ant-carousel > .custom-slick-arrow:before {
  display: none;
}
.ant-carousel > .custom-slick-arrow:hover {
  opacity: 0.5;
}
</style>
