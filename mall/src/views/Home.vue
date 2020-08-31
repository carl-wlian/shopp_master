<template>
    <div id="home" class="home">
         <!-- 搜索栏 -->
        <van-search v-model="searchData" placeholder="搜索商品，共34956款好物" input-align="center" @focus="handleFocus" />

        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" :with="375" :height="200">
           <van-swipe-item v-for="(image, index) in images" :key="index">
              <img class="swiperimg" v-lazy="image.image_url" />
           </van-swipe-item>
        </van-swipe>

        <!-- 5个宫格 -->
        <van-grid :column-num='5'>
          <van-grid-item v-for="(item,index) in channel" :key="index" :icon="item.icon_url" :text="item.name" />
        </van-grid>

        <!-- 品牌制造商直供 -->
        <div class="brandlist">
          <van-panel title="品牌制造商直供">
            <van-grid :column-num='2'>
              <van-grid-item v-for="(item1,index1) in brandList" :key="index1">
                <van-image fit="cover" lazy-load :src="item1.new_pic_url" />
                <h4 class="title">{{item1.name}}</h4>
                <p class="price">{{item1.floor_price}}元起</p>
              </van-grid-item>
            </van-grid>
          </van-panel>
        </div>
        
        <!-- 新品首发 -->
        <div class="newlist">
            <van-panel title="品牌制造商直供">
                <van-grid  :column-num="2">
                    <van-grid-item v-for="(item2,index2) in newGoodsList" :key="index2">
                        <van-image fit="cover" lazy-load :src="item2.list_pic_url" />
                        <h4 class="title" >{{item2.name}}</h4>
                        <p class="price">{{item2.retail_price}}元起</p>
                    </van-grid-item> 
                </van-grid>
            </van-panel>
        </div>

        <!-- 人气面板 -->
        <div class="hotlist">
            <van-panel title="人气推荐">
                <van-card v-for="(item3,index3) in hotGoodsList" :key="index3"
                  :price="item3.retail_price"
                  :desc="item3.goods_brief"
                  :title="item3.name"
                  :thumb="item3.list_pic_url"
                />
            </van-panel>
        </div>

        <div class="footer">
          <div class="f_mid">
            <span>下载APP</span>
            <span>电脑版</span>
            <p>欣然公司版权所有 © 1999-2020</p>
            <p>食品经营许可证：JY135415335158</p>
          </div>
        </div>

        <!-- 导航栏 -->
        <div style="height:50px;"></div>
        <tab-btn></tab-btn>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import api from '../assets/config/api'
import Vue from 'vue';
import { Lazyload } from 'vant';
import tabBtn from '@/components/tabBtn.vue' 
Vue.use(Lazyload);
export default {
  name: 'home',
  data:function(){
    return {
      searchData:"",
      data:{},
      tabActive:0,
    }
  },
  methods: {
    handleFocus () {
      console.log(123)
      this.$router.push('/search')
    },
  },
  computed:{
    images:function(){
      if(typeof this.data.banner=='object'){
        return this.data.banner
      }else{
        return []
      }
    },
    channel:function(){
      if(typeof this.data.channel=='object'){
        return this.data.channel
      }else{
        return []
      }
    },
    brandList:function(){
      if(typeof this.data.brandList=='object'){
        return this.data.brandList
      }else{
        return []
      }
    },
    newGoodsList:function(){
      if(typeof this.data.newGoodsList=='object'){
        return this.data.newGoodsList
      }else{
        return []
      }
    },
    hotGoodsList:function(){
      if(typeof this.data.hotGoodsList=='object'){
        return this.data.hotGoodsList
      }else{
        return []
      }
    },
    imgs:function(){
      if(typeof this.data.topicList=='object'){
        return this.data.topicList
      }else{
        return []
      }
    },
  },
  components: {
    tabBtn
  },
  async mounted() {
    //console.log(api)
    let res = await axios.get(api.IndexUrl)
    console.log(res.data)
    this.data = res.data.data
  },
}
</script>


<style lang="less">
  #home{ 
    .van-grid-item{
      overflow: hidden;
    }
    .swiperimg{
      width:375px;
      height: 200px;
    }

    .brandlist{
      .van-grid-item__content{
        padding: 0;
      }
      .van-image{
      border: 1px solid #fff;
      }
      .title{
      position: absolute;
      top:20px;
      left:10px;
      }
      .price{
      position: absolute;
      top:40px;
      left:10px;
      font-size: 14px;
      color: #999;
      }
    }

    .newlist{
      .title{  
        width: 90%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .price{  
        font-size: 14px;
        color:#999 ;
      }
    }
    
    .hotlist{
      .van-card__content{
        justify-content: center;
        text-align: left;
      }
      .van-card__title{
        font-weight: 900;
        color: #333;
        font-size: 14px;
        padding: 5px 0;
      }
      .van-card__price{
          color:red;
      }
    }

    .footer{
      width: 100%;
      height: 120px;
      background: #414141;
      margin: 0;
      padding: 0;

      .f_mid{
        width: 100%;
        margin: 0 auto;
        padding: 20px 0;
        box-sizing: border-box;
      }
      span{
        color: #fff;
        width: 80px;
        height: 30px;
        display: inline-block;
        border: 1px solid #999;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
        margin-left: 20px;
      }
      p{
        margin-top: 15px;
        font-size: 12px;
        color: #A9A9A9;
        line-height: 15px;
      }
    }
  }
  
</style>