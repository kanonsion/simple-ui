<template>
    <div class="hello">
        <!--        <xjl-table></xjl-table>-->
        <simple-table
            :tableOptions="tableOptions"
            :tableData="tableData"
            :columns="columns">
        </simple-table>
    </div>
</template>

<script>
    import XjlTable from "./table/index-full-el"
    import SimpleTable from "./simple-table"
    export default {
        name: 'hello-world',
        components: {SimpleTable, XjlTable},
        data() {
            return {
                tableOptions: {
                    props: {
                        stripe: true,
                        border: true,
                        cellClassName: 'aaa'
                    },
                    on:{
                        'cell-click': this.handleCellClick.bind(this)
                    }
                },
                tableData: [{name: 11, age: 11, add: 11, type: 'aa'}]
            }
        },
        computed:{
            columns(){
                return [
                    {
                        prop: 'name',
                        label: '姓名',
                        width: 300,
                        class: 'aaa',
                        hidden: false,
                        style: {
                            fontSize: '40px'
                        },
                        attrs:{
                            id: 'id'
                        },
                        // columns: [
                        //     {
                        //         prop: 'age',
                        //         label: '年龄',
                        //     },
                        //     {
                        //         prop:'add',
                        //         label: '地址',
                        //         columns: [
                        //             {
                        //                 prop:'type',
                        //                 labe: '类型',
                        //             }
                        //         ]
                        //     }
                        // ],
                        ref: '',
                        // component:{
                        //     dom: '',
                        //     options:{
                        //         props:{},
                        //         on: {}
                        //     }
                        // }
                    }
                ]
            }
        },
        methods:{
            handleCellClick(value){
                console.log(value)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
