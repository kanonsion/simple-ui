<template>
    <div id="app">
        <simple-table></simple-table>
    </div>
</template>

<script>
    import Demo from "./demo"
    export default {
        name: 'app',
        created() {
            this.$dialog
                .config({
                    props: {
                        title: '提示',
                        width: '1200px'
                    }
                })
                .show(Demo)
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
