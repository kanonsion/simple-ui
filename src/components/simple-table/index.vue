<script type="text/jsx">
    /*
     * 通过解析配置项，生成表格
     * */
    export default {
        name: 'simple-table',
        data() {
            return {
                defaultTaleOptions:{
                    ref: 'simpleTable'
                }
            }
        },
        props:{
            tableOptions:{
                type: Object,
                default: () => ({})
            },
            tableData: {
                type: Array,
                default: () => []
            },
            columns: {
                type: Array,
                default: () => []
            }
        },
        methods:{
            renderTable() {
                const {defaultTaleOptions, tableOptions, tableData} = this
                const {props, on} = {...defaultTaleOptions, ...tableOptions}
                return (
                  <el-table
                      props={props}
                      on={on}
                      data={tableData}>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                  </el-table>
              )
            },
            renderColumn() {
                const {columns} = this
            }
        },
        render(){
            return this.renderTable()
        }
    }
</script>