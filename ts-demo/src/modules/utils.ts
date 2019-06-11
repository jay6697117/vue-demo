class utilsModule {

    /**
     * rem 适应
     * @param el 指定元素适配
     */
    remSetting(el: HTMLElement | null) {
        if (!el) return;
        const html = document.documentElement; // 注意这里不能 使用 document.body
        /** 比例值 */
        let value = 375 / 50;
        /** 视口宽度 */
        let width = el.getBoundingClientRect().width;
        html.style.fontSize = width / value + 'px';
        // 窗口变动时更新适配
        window.addEventListener('resize', function() {
            width = el.getBoundingClientRect().width;
            html.style.fontSize = width / value + 'px';
        });
    }
    
    /**
     * 复制内容
     * @param value 内容 
     */
    public copyText(value: string) {
        let input = document.createElement("input");
        input.value = value;
        document.body.appendChild(input);
        input.select(); // 选择对象;
        // 执行浏览器复制命令
        document.execCommand("Copy"); 
        input.remove();
    }

    /**
     * 数组中随机取几个元素
     * @param array 数组
     * @param count 元素个数
     */
    public getRandomArrayElements(array: Array<any>, count: number) {
        /** 数组长度 */
        let length = array.length;
        /** 最小长度 */
        let min = length - count, temp, range;
        while (length-- > min) {
            range = Math.floor((length + 1) * Math.random());
            temp = array[range];
            array[range] = array[length];
            array[length] = temp;
        }
        return array.slice(min);
    }

    /**
    * 随机打乱数组
    * @param array
    */
    public shuffleArray(array: Array<any>) {
        let random = (a: any, b: any) => Math.random() > 0.5 ? -1 : 1;
        return array.sort(random);
    }

    /**
     * 范围随机数
     * @param min 最小数
     * @param max 最大数
     */
    public ranInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

/** 工具模块 */
const uiils = new utilsModule();

export default uiils;