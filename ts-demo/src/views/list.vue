<template>
    <div class="list-page">
        <maynav :title="title" @onLeft="back" />
        <div class="menu">
            <div class="item" v-for="(item, index) in menuList" :key="index">
                <div :class="['btn',  listData.index == index ? 'btn_active' : '' ]" @click="menuSwitch(index)">{{ item.name }}</div>
            </div>
        </div>
        <input class="input-box" type="number" v-model="inputNumber" :placeholder="inputTip">
        <transition-group class="list move-list" tag="div" name="listMove">
            <div class="list-item move-list-item" v-for="item in viewList" :key="item.id">
                <div class="content">
                    <img class="shop-img" src="../assets/logo.png" alt="">
                    <div class="price">${{ item.price }}</div>
                    <div class="text">{{ item.name }}</div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue  } from 'vue-property-decorator';
import maynav from '../components/header.vue';
import Global from '../modules/Global';
import utils from '../modules/utils';

@Component({
    components: {
        maynav
    }
})
export default class ListPage extends Vue {
    /** 标题 */
    private title: string = '列表筛选';

    /** 返回 */
    private back() {
        this['$router'].go(-1);
    }

    /** 页面数据 */
    private listData = Global.listData;
    
    /** 菜单列表 */
    private menuList = [
        {
            name: '从低到高',
        }, {
            name: '从高到低',
        }, {
            name: '随机'
        }
    ]

    /** 输入提示 */
    private inputTip: string = '输入价格最低范围并过滤';

    /** 输入价格 */
    private inputNumber: number | string = '';

    /**
     * 按钮切换
     * @param index 按钮切换索引
     */
    private menuSwitch(index: number) {
        this.listData.index = index;
    }

    /** 过滤之后的数据 */
    private get viewList() {
        let list = this.listData.list;
        switch (this.listData.index) {
            case 0:
                list.sort((a, b) => a.price - b.price);
                break;
        
            case 1:
                list.sort((a, b) => b.price - a.price);
                break;

            case 2:
                list = utils.shuffleArray(list);
                break;
        }
        let number = Number(this.inputNumber) || 0;
        if (number > 0) {
            list = list.filter(item => item.price <= number);
        }
        return list;
    }
}

</script>

<style lang="less" scoped>
@import "../../static/style/base.less";
.list-page{
    .menu{
        width: 100%; .flex(); .fvertical(); height: 1rem; margin-bottom: 10px;
        .item{
            .f(1); 
            .btn{
                .s1(); color: @textColor; width: 1.8rem; height: .7rem; border: solid 1px rgb(204, 204, 204); border-radius: .35rem; background-color: #fff; transition: .3s all; margin: 0 auto; text-align: center; line-height: .68rem; cursor: pointer;
            }
            .btn_active{ color: #fff; background-color: @themeColor; border-color: @themeColor; }
        }
    }
    .input-box{ width: 90%; padding: 10px; height: .8rem; border-bottom: solid 1px #eee; margin: 0 auto; display: block; margin-bottom: 10px; }
    .list{ 
        width: 100%; .flex();
        .list-item{ 
            width: 50%; padding: 20px; background-color: #fff;
            .content{ 
                width: 100%; .card(); .radius(); padding: 10px; 
                .shop-img{ width: 100%; margin-bottom: .2rem; }
                .price{ .s1(); color: @red; }
                .text{ font-size: 14px; color: @textColor; .ellipsis(); }
            }
        }
    }
}

</style>
