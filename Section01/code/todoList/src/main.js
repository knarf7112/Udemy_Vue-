// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'      // 此行目的是導入Vue組件
import App from './App'    // 導入當前目錄下的App.vue檔案(副檔名.vue可省略)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
