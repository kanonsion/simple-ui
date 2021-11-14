<script type="text/jsx">
    import {merge} from 'lodash'
    /*
     * 通过解析配置项，生成表格
     * */
    export default {
        name: 'simple-table',
        data() {
            return {
                defaultTaleOptions:{
                    ref: 'simpleTable'
                },
                defaultPaginationOptions:{
                    props: {
                        layout: "total, sizes, prev, pager, next, jumper",
                        pageSizes: [10,20,30,50],
                        pageSize: 10,
                    },
                    on: {
                        'size-change': this.handleChangeSize.bind(this),
                        'current-change': this.handleChangePage.bind(this),
                    }
                },
                currentPaginationOptions: {}
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
            },
            isShowPagination:{
                type: Boolean,
                default: true
            },
            paginationOptions:{
                type: Object,
                default: () => ({})
            },
            total: {
                type: Number,
                default: 0
            }
        },
        methods:{
            renderTable() {
                const {defaultTaleOptions, tableOptions, tableData, columns} = this
                const {props, on} = {...defaultTaleOptions, ...tableOptions}
                return (
                  <div>
                    <el-table
                        props={props}
                        on={on}
                        data={tableData}>
                      {this.renderColumns(columns)}
                    </el-table>
                    {this.isShowPagination ? this.renderPagination() : null}
                  </div>
              )
            },
            renderColumns(columns){
                return columns
                    .filter(e => !e.hidden)
                    .map(column => {
                        if (column.columns) {
                            // 多级列
                            return this.renderColumn(column, this.renderColumns(column.columns))
                        } else {
                            // 常规列或者自定义组件
                            return this.renderColumn(column)
                        }
                    })
            },
            renderColumn(column, children) {
                const {on} = column
                if (column.component){
                    // 自定义组件-component形式
                    const {dom} = column.component
                    const scopedSlots = {
                        default: (props) => (
                            <dom
                                row={props.row}
                                props={column.component.props}
                                on={column.component.on}>
                            </dom>
                        )
                    }
                    return (
                      <el-table-column
                          props={column}
                          on={on}
                          scopedSlots={scopedSlots}>
                      </el-table-column>
                    )
                } else if (column.render){
                    // 自定义组件-render形式
                    const scopedSlots = {
                        default: (props) => column.render(props)
                    }
                    return (
                      <el-table-column
                          props={column}
                          on={on}
                          scopedSlots={scopedSlots}>
                      </el-table-column>
                    )
                } else {
                    return (
                      <el-table-column props={column} on={on}>
                        {children}
                      </el-table-column>
                    )
                }
            },
            renderPagination(){
                const {props, on} = this.currentPaginationOptions
                return (
                    <el-pagination
                        props={props}
                        on={on}>
                    </el-pagination>
                )
            },
            handleChangeSize(pageSize){
                // 重置为第一页
                this.$emit('updatePagination', {
                    pageSize,
                    currentPage: 1
                })
            },
            handleChangePage(currentPage){
                this.$emit('updatePagination', {
                    pageSize: this.currentPaginationOptions.props.pageSize,
                    currentPage
                })
            }
        },
        watch: {
            paginationOptions: {
                immediate: true,
                handler(){
                    this.currentPaginationOptions = merge(this.defaultPaginationOptions, this.paginationOptions)
                }
            }
        },
        render(){
            return this.renderTable()
        }
    }
</script>
