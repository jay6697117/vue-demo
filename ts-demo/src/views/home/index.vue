<template>
    <div class="index">
        <div class="nav">
            <router-link class="nav-item" tag="div" v-for="(item, index) in navList" :key="index" :to="item.path">{{ item.name }}</router-link>
        </div>
        <router-view class="content" />
        <div class="next" @click="openPage">切换页面</div>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Vue  } from 'vue-property-decorator';

@Component({})
export default class IndexPage extends Vue {
    /** 导航列表 */
    private navList = [
        {
            name: 'home',
            path: '/home',
        }, {
            name: 'plug',
            path: '/plug',
        }
    ]

    /** 跳转页面 */
    openPage() {
        this['$router'].push('/list');
    }
}

</script>

<style lang="less" scoped>
@import "../../../static/style/base.less";
.index{ 
    width: 100%; 
    .nav{ 
        width: 100%; height: .88rem; background-color: @themeColor; .flex(); .fvertical(); 
        .nav-item{
            color: #fff; .st(); text-align: center; line-height: .88rem; .f(1); cursor: pointer; position: relative; .transition(.3s);
            &::before{ position: absolute; content: "{"; top: 0; left: 30%; color: #fff; opacity: 0; .transition(.3s); }
            &::after{ position: absolute; content: "}"; top: 0; right: 30%; color: #fff; opacity: 0; .transition(.3s); }
        }
        .router-link-active{ 
            color: rgb(255, 190, 70); 
            &::before{ color: rgb(255, 190, 70); left: 20%; opacity: 1; }
            &::after{ color: rgb(255, 190, 70); right: 20%; opacity: 1; }
        }
    }
    .content{ padding: .2rem; }
    .next{ .btnShadow(); width: 2.2rem; text-align: center; .s1(); background-color: @themeColor; color: #fff; line-height: .7rem; height: .7rem; margin: 0 auto; }
} 
</style>
