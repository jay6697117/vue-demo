<template>
    <header class="header">
        <div class="item" @click="leftClick">
            <div>{{ left }}</div>
        </div>
        <div class="title-box">{{ title }}</div>
        <div class="item right">
            <div>{{ right }}</div>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Watch, Prop, Emit, Vue } from 'vue-property-decorator';

@Component({})
export default class HeaderComponent extends Vue {
    @Prop({ default: '返回' })
    private left!: string;
    
    @Prop({ default: 'title' })
    private title!: string;

    @Prop({ default: '' })
    private right!: string;

    @Emit('onLeft') leftClick() {

    }
}
</script>

<style lang="less" scoped>
@import "../../static/style/base.less";
.header{
    width: 100%; height: .88rem; .flex(); .fvertical(); background-color: @themeColor; .card(); margin-bottom: 10px;
    .title-box{ .f(3); color: #fff; .s1(); text-align: center; .ellipsis(); }
    .item{ font-size: .28rem; color: #fff; .f(1); height: .88rem; padding: 0 .2rem; cursor: pointer; .flex(); .fvertical(); }
    .item div{ .ellipsis(); }
    .right{ text-align: right; .fright(); }
}
</style>


