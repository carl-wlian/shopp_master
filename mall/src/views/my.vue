<template>
    <div id="my">
      <div class="btnWrap">
        <div class="phone_login" @click="$router.push('/login')">
          <span>手机号码登录</span>
        </div>
        <div class="email_login"  @click="$router.push('/email')">
          <span>邮箱账号登录</span>
        </div>
        <div class="register">
          手机号快捷注册
        </div>
      </div>

      <div class="bottom_wrap">
        <div class="itemWrap">
          <span>微信</span>
        </div>
        <div class="itemWrap">
          <span>QQ</span>
        </div>
        <div class="itemWrap">
          <span>微博</span>
        </div>
      </div>
        <tab-btn></tab-btn>
    </div>
</template>

<script>
import tabBtn from '@/components/tabBtn.vue'
import axios from 'axios'
import api from '@/assets/config/api.js'
export default {
    data(){
        return{

        }
    },
    components: {
        tabBtn
    },
}
</script>

<style lang="less">
    #my{
      width: 100%;
      height: 100%;
      background: #f4f4f4;
      .btnWrap{
        margin-top:280px;
        width: 90%;

        .phone_login{
          width: 100%;
          height: 50px;
          border: 1px solid #b82025;
          line-height: 50px;
          text-align: center;
          color: #fff;
          background: #d10f16;
          margin-left: 15px;
        }
        .email_login{
          width: 100%;
          height:50px;
          border: 1px solid #c22323;
          line-height: 50px;
          text-align: center;
          margin: 20px 0;
          margin-left: 15px;
        }
        .register{
          widows: 100%;
          height: 40px;
          text-align: center;
          margin-left: 20px;
        }
      }

      .bottom_wrap{
        margin-top:240px;
        margin-left: 80px;
        .itemWrap{
          float:left;
          padding: 0 20px;
          color: #7f7f7f;
          border-right: 1px solid #7f7f7f;
          
        }
      }
      
    }
</style>