<template>
    <div class="hello">
        <!--        <xjl-table></xjl-table>-->
        <simple-table
            :tableOptions="tableOptions"
            :tableData="tableData"
            :paginationOptions="paginationOptions"
            :columns="columns">
        </simple-table>
    </div>
</template>

<script>
    import XjlTable from "./table/index-full-el"
    import SimpleTable from "./simple-table"
    import Hello from './hello'
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
                paginationOptions: {
                    props: {
                        pageSize: 20
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
                        hidden: false,
                        style: {
                            fontSize: '40px'
                        },
                        attrs:{
                            id: 'id'
                        },
                        ref: '',
                    },
                    {
                        prop: 'add',
                        label: '年龄',
                        render: props => {
                            return <h1>{props.row.type}</h1>
                        }
                    },
                    {
                        prop: 'type',
                        label: '类型',
                        component:{
                            dom: Hello,
                            options: {

                            }
                        }
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
