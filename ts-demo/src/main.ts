import Vue from 'vue'
import App from './App.vue'
import router from './modules/router'
import store from './modules/store'

// 监听浏览器按钮去触发定义的切换状态
window.addEventListener('popstate', () => {
    router.isBack = true;
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
