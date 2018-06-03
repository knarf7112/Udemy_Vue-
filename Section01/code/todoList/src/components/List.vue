<!-- HTML -->
<template>
    <div class="view">
        <h1>{{ title }}</h1>
        <!-- input元素負責將todo內容輸出到todo列表 -->
        <input type="text" @keyup.enter="addData" />

        <ul>
            <li v-for="item in items" v-bind:class="{ finish: item.isFinished }" @click="toggleFinish(item, $event)">
                {{ item.text }}
            </li>
        </ul>
    </div>
</template>

<!-- JavaScript -->
<script>

/*
 ES6的導出方式,讓開發者可以import模組且不須要使用一模一樣的key name (import關鍵字後面不用加大括號)
 export dedault 本質上就是輸出一個叫做default變數或方法並且讓系統允許為它取任意名稱,
 並將後面的值assugn給default變量
 一個模組只能有一個默認輸出
 
 */
// 可參考: http://es6.ruanyifeng.com/?search=import&x=0&y=0#docs/module#export-default-%E5%91%BD%E4%BB%A4
export default {
    name: 'List',
    // 組件對應的data屬性為一個function且function須回傳一個物件
    // data: function() {
    //   return { };
    // }
    // ES6 recommend
    data() {
        return {
            // 標題
            title: 'Todo List',
            // 待辦事項
            items: [
                {
                    text: '今天晚上18:00跑步',
                    isFinished: false
                },
                {
                    text: '今天吃早餐',
                    isFinished: true
                }
            ]
        };
    },
    methods: {
        toggleFinish : function (item) {
            console.log('模板頁面傳過來的參數', item);
            // change status
            item.isFinished = !item.isFinished;
        },
        addData(e) {
            console.log('keyup enter event: 新增todo內容至todo列表中', e.target.value);
            let todoContent = e.target.value;
            this.items.unshift({ 
                text: todoContent,
                isFinished: false
            });

            // clear input value
            e.target.value = '';

            console.log('emitter event object exit?', ('$emit' in this));
            // 1. 將輸入框中輸入值傳遞給父組件App.vue
            //    觸發myMsg事件(自定義事件), 並傳遞參數值
            this.$emit('myMsg', todoContent); // emmit event and passs data to consumer
        }
    }
}
</script>

<!-- CSS -->
<style>
    .view {
        width: 400px;
        border: 1px solid gray;
        margin: 20px auto;
    }
    .view .title {
        border-bottom: 1px solid gray;
    }
    .view ul li {
        margin: 10px 0;
        list-style-type: none;
    }
    /* 待辦事項完成就添加此clss */
    .view .finish {
        color: gray;
        text-decoration: line-through;
    }
</style>
