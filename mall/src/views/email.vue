<template>
  <div id="emaillogin">
        <van-nav-bar
            title="登录"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
        <div class="form">
            <input class="user" type="text" placeholder="邮箱账号" v-model="eamil" @keyup="checkeamil"/>
            <span v-show="tips" style="color: red">{{tips}}</span>
            <div class="pwd">
                <input type="password" placeholder="密码"/>
                <slot name="getCode"></slot>
            </div>
            <div class="sub">
                <input type="submit" value="登录" id="password">
                <div class="other" @click="$router.push('/my')">其他方式登录 ></div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        eamil:'',
        tips:'',
      }
    },
    methods:{
      onClickLeft:function(){
        this.$router.go(-1);
      },

      checkeamil () {
        clearTimeout(this.timeId)
        this.timeId = setTimeout(() => {
          const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
          if (!reg.test(this.eamil)) {
            this.tips = '邮箱格式不正确'
            } else {
            this.tips = ''
          }
        },2000)
      },
    }
}
</script>

<style lang="less">
    #emaillogin{
      width: 100%;

      .form{
        width: 90%;
        height: 250px;
        margin: 0 auto;
        margin-top: 200px;
        input{
          width: 100%;
          height: 40px;
          outline: none;
          border: none;
          border-bottom: 1px solid rgb(165, 74, 74);
          margin-bottom: 20px;
          font-size: 14px;
        }
        .sub{
          width: 100%;
          height: 200px;
          input{
            width: 100%;
            height: 50px;
            border-radius: 5px;;
            background: rgb(231, 13, 6);
            font-size: 14px;
            color: #ffffff;
          }
          .other{
            padding-top: 20px;
            text-align: center;
            }
        }
        
      }

      
    }
</style>