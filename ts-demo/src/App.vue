<template>
    <div id="page">
        <transition :name="transitionName">
            <router-view/>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Vue  } from 'vue-property-decorator';
import utils from './modules/utils';

@Component({})
export default class RootModule extends Vue {

    /** 路由过渡动画名称 */
    transitionName: string = 'page-next';

    /** 监听路由变化 */
    @Watch('$route') onRoute(to: any, from: any) {
        //  监听路由变化时的状态为前进还是后退
        if(this['$router'].isBack) {
            this.transitionName = 'page-back';
        } else {
            this.transitionName = 'page-next';
        }
        this['$router'].isBack = false;
    }

    /** 生命周期 */
    mounted() {
        utils.remSetting(document.getElementById('page'));        
    }
}
</script>

<style lang="less">
@import "../static/style/base.css";
@import "../static/style/base.less";
#page{
    width: 100%;
    max-width: 680px;
    margin: 0 auto;
    overflow: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
    
    /* =================== 页面切换过渡动画 ===================== */
    // .child-view {
    //     position: fixed;
    //     width:100%;
    //     transition: all .4s cubic-bezier(.55,0,.1,1);
    // }
    .page-next-enter, .page-back-enter, .page-back-leave-active, .page-next-leave-active{
        position: fixed;
        width: 100%;
        height: 100vh;
        // backface-visibility: hidden;
        // perspective: 1000;
        // background-color: #fff;
    }
    // 第一种：安卓会卡
    .page-next-enter{
        transform: translate3d(100%, 0, 0);
    }
    .page-back-enter{
        transform: translate3d(-100%, 0, 0);
    }
    .page-back-leave-active{
        opacity: 0;
        transform: translate3d(90%, 0, 0);
    }
    .page-next-leave-active{
        opacity: 0;
        transform: translate3d(-90%, 0, 0);
    }
    .page-next-enter-active, .page-back-enter-active, .page-next-leave-active, .page-back-leave-active{ transition: .4s all; }

    /* =================== 列表过渡动画 ===================== */

    // 动画列表最外层容器
    .move-list{ position: relative; }
    // 动画列表item
    .move-list-item{ transition: .8s all; }
    // 列表动画
    .listMove-leave-active{
        opacity: 0;
        position: absolute;
        transform: scale(0.5,0.5);
        -webkit-transform: scale(0.5,0.5);
        -ms-transform: scale(0.5,0.5);
    }
    .listMove-enter {
        opacity: 0;
        transform: translateY(60%);
        -webkit-transform: scale(0.5,0.5);
        -ms-transform: scale(0.5,0.5);
    }
}
</style>

