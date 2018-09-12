<style lang=less>
html,
body,
.container {
  height: 100%;
}
body {
  background: gray;
}
.recommend {
  width: 100%;
  ul {
    list-style: none;
    font-size: 0;
  }
  li {
    display: inline-block;
    width: 33%;
    text-align: center;
    font-size: 20px;
    a {
      text-decoration: none;
    }
  }
}
.local-music {
  width: 100%;
  height: 30px;
  background: red;
  font-size: 0;
  img {
    height: 100%;
    vertical-align: middle;
  }
  span {
    font-size: 20px;
    line-height: 30px;
    vertical-align: middle;
  }
}
.music-bar {
  width: 100%;
  height: 100px;
  background: aquamarine;
  display: flex;
  .img {
    width: 100px;
    height: 100px;
    background: coral;
  }
  .test {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    /* flex: 1 0 auto; */
    padding: 20px;
    p {
      line-height: 30px;
      font-size: 25px;
    }
  }
  .more {
    flex: 0 0 100px;
    img {
      height: 100%;
    }
  }
}
.more-panel {
  width: 100%;
  height: 200px;
  background: honeydew;
  position: fixed;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  padding: 30px 20px;
  z-index: 1;
  p {
  }
}
.mask {
  width: 100%;
  height: 100%;
  background: rgba(100, 100, 100, 0.3);
  position: absolute;
  top: 0;
}
</style>

<template>
    <div class="container">
        <xxx :foo='demo'></xxx>
        <div class="nav-bar">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">
        </div>
        <div class="recommend">
            <ul>
                <li>
                    <a href="">推荐</a>
                </li>
                <li>
                    <a href="">朋友</a>
                </li>
                <li>
                    <a href="">电台</a>
                </li>
            </ul>
        </div>
        <div class="roll"></div>
        <div class="">
            <div>私人FM</div>
            <div>每日推荐</div>
            <div>歌单</div>
            <div>排行榜</div>
        </div>
        <div class="local-music">
            <img src="./assets/菜单.png" alt="">
            <span>本地音乐（138）</span>
        </div>

        <div class="music-bar">
            <div class="img"></div>
            <div class="test">
                <p>qsvzxv</p>
                <p>dfdb</p>
            </div>
            <div class="more">
                <img src="./assets/菜单.png" alt="" @click="showMore()">
            </div>
        </div>

        <div class="mask" v-if='show' @click="hideMore"></div>
        <div class="more-panel" v-if='show'>
            <p>歌单：我喜欢的音乐</p>
            <div>
                <img src="" alt="">
                <span>下载</span>
            </div>
            <div>
                <img src="" alt="">
                <span>分享</span>
            </div>
        </div>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <van-button size="large">大号按钮</van-button>
        <van-button size="normal">普通按钮</van-button>
        <van-button size="small">小型按钮</van-button>
        <van-button size="mini">迷你按钮</van-button>
        <div>
            <van-circle v-model="currentRate" :rate="30" :speed="100" :text="text" />
            <van-circle v-model="currentRate" color="#13ce66" fill="#fff" size="120px" layer-color="#eee" :text="text" :rate="30" :speed="100" :clockwise="false" :stroke-width="60" />
        </div>
    </div>
</template>
<script>
import xxx from './xxx.vue';
import { Circle } from "vant";
import Vue from "vue";
import { Toast } from "vant";
import { Button } from "vant";
Vue.use(Circle);
Vue.use(Toast);
Vue.use(Button);

export default {
  data() {
    return {
      show: false,
      currentRate: 0,
      demo:[{img:'sss',text:'aaa'},{img:'sss',text:'aaa'}],
    };
  },
  methods: {
    showMore() {
      this.show = true;
    },
    hideMore() {
      this.show = false;
    }
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  },
components:{
      xxx
  }
};
</script>

