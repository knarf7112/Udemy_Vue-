<template>
  <div id="app">
    <!-- 直接賦值給props內的msg屬性 -->
    <!--<header-view msg="這是後來傳入的值" />-->

    <!-- 透過父組件的屬性傳遞值給props內的msg屬性 -->
    <header-view v-bind:msg="parentMsg" />

    <img src="./assets/logo.png">
    <!-- 3. 渲染組件 -->
    <list-view @myMsg="getChildData" />
    <!---<HelloWorld/>-->
    <p>ListView組件所傳遞的todo內容:{{ childPassData }}</p>
  </div>
</template>

<script>
//1. 導入組件
import ListView from './components/List';
import HeaderView from './components/Header'; // header section

// App.vue是父組件, ListView是子組件
// 組件通信方向: 父組件 --> 子組件  (通過子組件的props屬性完成傳遞)

export default {
  name: 'App',
  components: {
      ListView, // 2. 註冊組件
      HeaderView
  },
  data(){
    return {
        parentMsg: 'VueJS入門',
        childPassData: '',
    };
  },
  methods:{
    getChildData (msg) {
        console.log('App.vue收到子組件ListView傳遞的數據',msg);
        this.childPassData = msg;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
