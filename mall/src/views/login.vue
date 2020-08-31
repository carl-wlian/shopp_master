<template>
  <div id="login">
      <van-nav-bar
            title="登录"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]"/>
        <div style="margin: 16px;">
          <van-button type="info" native-type="submit">
            登录
          </van-button>
        </div>
        <van-checkbox v-model="checked" shape="square">我同意 <a href="#">《服务条款》</a> 和 <a href="#">《隐私政策》</a></van-checkbox>
        <div class="other"  @click="$router.push('/my')">其他方式登录 ></div>
      </van-form>
  </div>
</template>

<script>
export default {
    data(){
      return{
        username:'',
        password:'',
        checked:''
      }
    },
    methods:{
      onClickLeft:function(){
        this.$router.go(-1);
      },
      onSubmit(values) {
        console.log('submit', values);
      },
    }
}
</script>

<style lang="less">
    #login{
      width: 100%;

      .van-button{
        width: 100%;
        height: 50px;
        background: red;
        border-radius: 5px;
      }
      .van-checkbox{
        font-size: 12px;
        margin-left: 20px;
      }
      .other{
        margin-top: 20px;
        font-size: 16px;
      }
    }
</style>