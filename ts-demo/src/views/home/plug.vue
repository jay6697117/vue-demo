<template>
    <div class="plug">
        <input class="input" type="text" placeholder="输入并检测是否为数字" v-model="inputText">
        <p class="tip">{{ checkInput }}</p>
        <h2 class="title">{{ homeData.getTip }}：</h2>
        <textarea class="input-box" v-model="homeData.content" :placeholder="homeData.info"></textarea>
        <h2 class="title">{{ diyData.getTip }}：</h2>
        <textarea class="input-box" v-model="diyData.content" :placeholder="diyData.info"></textarea>
    </div>
</template>
<script lang="ts">
import { Component, Watch, Vue  } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { HomeDataType } from '../../modules/interfaces';
import Global from '../../modules/Global';

@Component({})
export default class PlugPage extends Vue {
    /** vuex homeData */
    @State('homeData') homeData: HomeDataType;

    /** 自定状态数据 */
    private diyData = Global.store;

    /** 输入文本 */
    private inputText: string = '';
    
    /** 计算是否为数字 */
    get checkInput() {
        let string = '输入的不是数字';
        if (!isNaN(Number(this.inputText)) && this.inputText) {
            string = 'is number !'
        }
        return string;
    }
}
</script>

<style lang="less" scoped>
@import "../../../static/style/base.less";
.plug{
    .title{ margin-bottom: .2rem; .s1(); color: @gray; }
    .input-box{ border: dashed 1px rgb(216, 216, 216); width: 100%; height: 3rem; padding: .2rem; .s1(); .radius(); margin-bottom: .2rem; }
    .input{ width: 100%; height: .88rem; border-bottom: solid 1px #eee; margin-bottom: .2rem; .s1(); }
    .tip{ .s2(); color: @themeColor; margin-bottom: .3rem; }
}
</style>

