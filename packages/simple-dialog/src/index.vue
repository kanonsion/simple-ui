<template>
    <div>
        <el-dialog :visible.sync="isShowDialog"></el-dialog>
    </div>
</template>

<script>
    export default {
        name: "simple-dialog",
        data(){
            return {
                isShowDialog: false,
                a: 2
            }
        },
    }
</script>

<style scoped>

</style>
