import utils from './utils';

class GlobalModule {
    /** 全局数据 */
    public store = {
        /** 输入内容 */
        content: '',
        /** 输入描述 */
        info: '输入内容到自定义的 class 数据管理中 实现 vuex state 功能',
        /** 输入描述 */
        setTip: '自定义 class 作为状态数据',
        /** 接收提示 */
        getTip: '接收自定义 class 数据'
    }

    /** 创建商品列表 */
    private createList() {
        /** 价格列表 */
        let prices = [];
        /** 商品列表 */
        let shopList = [];
        for (let i = 50; i < 300; i++) {
            prices.push(i);
        }
        prices = utils.getRandomArrayElements(prices, 30);
        for (let i = 0; i < prices.length; i++) {
            const p = prices[i];
            shopList.push({
                name: '商品-' + (i + 1),
                price: p,
                id: 'shop-' + i
            });
        }
        return shopList;
    }

    /** 列表筛选数据 */
    public listData = {
        /** 当前选择索引 */
        index: 0,
        /** 列表数据 */
        list: this.createList()
    }
}

/** 全局模块 */
const Global = new GlobalModule();

export default Global;