<template>
    <div class="headerview">
    {{ title }} {{ msg }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '這是標題 ...'
        };
    },
    // 1. add "props" attribute
    props: {
        // 2. add custom directive (很像指令也像數據顯示)
        msg: {
            type: String,
            default: '若父組件未傳值則這就會是預設值'
        }
    }
}
</script>

<style>
    .headerview {
        font-size: 2em;
        color: red;
    }
</style>
