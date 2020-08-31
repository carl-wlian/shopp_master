<template>
  <van-tabbar v-model="tabActive">
        <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="qr" to="/category">分类</van-tabbar-item>
        <van-tabbar-item icon="medal-o" to="/special">专题</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data(){
        return{
            tabActive:0
        }
    },
    mounted(){
        // console.log(this)
        switch(this.$route.path){
                case "/my":
                    this.tabActive = 4;
                    break;
                case "/cart":
                    this.tabActive = 3;
                    break;
                case "/special":
                    this.tabActive = 2;
                    break;  
                case "/category":
                    this.tabActive = 1;
                    break;
                case '/':
                    this.tabActive = 0;
                    break;
                default:
                    this.tabActive = 0;
            }
    },
}
</script>

<style>

</style>