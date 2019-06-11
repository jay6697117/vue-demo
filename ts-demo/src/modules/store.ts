import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        homeData: {
            /** 输入内容 */
            content: '',
            /** 输入描述 */
            info: '输入内容到 vuex 数据管理中',
            /** 输入描述 */
            setTip: 'vuex 状态管理',
            /** 接收提示 */
            getTip: '接收 vuex 数据'
        }
    },
    mutations: {

    },
    actions: {

    }
})
