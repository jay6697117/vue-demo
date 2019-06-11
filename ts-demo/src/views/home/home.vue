<template>
    <div class="home">
        <h2 class="title">{{ homeData.setTip }}：</h2>
        <textarea class="input-box" v-model="homeData.content" :placeholder="homeData.info"></textarea>
        <h2 class="title">{{ diyData.setTip }}：</h2>
        <textarea class="input-box" v-model="diyData.content" :placeholder="diyData.info"></textarea>
    </div>
</template>
<script lang="ts">
import { Component, Watch, Vue  } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { HomeDataType } from '../../modules/interfaces';
import Global from '../../modules/Global';

@Component({})
export default class HomePage extends Vue {
    @State('homeData') homeData!: HomeDataType;

    /** 自定状态数据 */
    diyData = Global.store;
    
}
</script>

<style lang="less" scoped>
@import "../../../static/style/base.less";
.home{
    .title{ 
        .st(); margin-bottom: .2rem; color: @themeColor; padding-left: .1rem; position: relative; 
        &::after{ content: ""; width: 2px; height: 90%; position: absolute; left: 0; bottom: 0; background-color: @themeColor; }
    }
    .input-box{ .card(); .radius(); width: 100%; height: 3rem; padding: .2rem; .s1(); margin-bottom: .2rem; }
}
</style>

