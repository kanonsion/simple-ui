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
                    {this.renderColumns()}
                  </el-table>
              )
            },
            renderColumns(){
                const {columns} = this
                return columns
                    .filter(e => !e.hidden)
                    .map(column => {
                        console.log('column', column)
                        if (column.columns) {
                            // 多级列
                            return this.renderColumn(column, this.renderColumns(column.columns))
                        } else if (column.component){
                            // 自定义组件

                        } else {
                            // 常规列
                            return this.renderColumn(column)
                        }
                    })
            },
            renderColumn(column, children) {
                console.log('children', children)
                const {on} = column
                return (
                  <el-table-column props={column} on={on}>
                    {children}
                  </el-table-column>
              )
            }
        },
        render(){
            return this.renderTable()
        }
    }
</script>