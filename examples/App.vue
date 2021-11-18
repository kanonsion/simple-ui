<template>
    <div id="app">
        <simple-table></simple-table>
    </div>
</template>

<script>
    import Demo from "./demo"

    export default {
        name: 'app',
        methods: {
            handleSubmit(val){
                console.log(val)
            }
        },
        created() {
            this.$dialog
                .config({
                    props: {
                        title: '提示',
                        width: '200px',
                    }
                })
                .show(Demo, {
                    props: {
                        buttonName: '哈哈哈哈哈'
                    },
                    on: {
                        submit: this.handleSubmit.bind(this)
                    }
                })
                .closed(() => {
                    console.log(1111)
                })
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
