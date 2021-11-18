<template>
    <div>
        <el-button @click="handleClose">{{ buttonName }}</el-button>
        <el-button @click="handleSubmit">确认</el-button>
    </div>
</template>

<script>
    export default {
        name: "demo",
        props: {
            buttonName: {
                type: String,
                default: '关闭'
            }
        },
        methods: {
            handleClose(){
                this.$dialog.close()
            },
            handleSubmit(){
                this.$emit('submit', 'data')
            }
        }
    }
</script>

<style scoped>

</style>
