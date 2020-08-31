<template>
    <div id="special">
        <van-panel title="人气推荐">
                <!-- <van-card v-for="(item,index) in data.data" 
                :key="index" 
                :price="item.price_info" 
                :desc="item.subtitle" 
                :title="item.title" 
                :thumb="item.scene_pic_url"/> -->
            <van-grid>
              <van-grid-item v-for="(item,index) in data.data" :key="index">
                <van-image fit="cover" lazy-load :src="item.scene_pic_url" :width="375" :height="200" />
                <h4 class="title">{{item.title}}</h4>
                <h5 class="subtitle">{{item.subtitle}}</h5>
                <p class="price">￥{{item.price_info}}元起</p>
              </van-grid-item>
            </van-grid>

        </van-panel>
        
        
        
        <tab-btn></tab-btn>
    </div>
</template>

<script>
import tabBtn from '@/components/tabBtn.vue'
import axios from 'axios'
import api from '@/assets/config/api.js'
import Vue from 'vue';
import { Loading } from 'vant';
Vue.use(Loading);
export default {
    data(){
        return{
            data:{},
            currentPage:"",
        }
    },
    async created() {
        let res = await axios.get(api.TopicList)
        let data = res.data;
        this.data = data.data;
        console.log(data)
    },
    components: {
        tabBtn
    },
}
</script>

<style lang="less">
    #special{
        .van-grid-item__content{
            padding: 0;
        }
        .van-image{
            border: 1px solid #fff;
        }
        .title{
            padding: 5px 0;
            font-size: 16px;
        }
        .subtitle{
            padding: 5px 0;
            font-size: 12px;
            color: #808080;
        }
        .price{
            padding: 5px 0;
            font-size: 13px;
            color: red;
        }
    }
</style>