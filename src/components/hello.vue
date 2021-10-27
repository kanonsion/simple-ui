<template>
    <div>反对封建时代封建士大夫就</div>
</template>

<script>
    export default {
        name: "hello",
        props:{
            row: {
                type: Object,
                default: () => ({})
            }
        },
        created() {
            console.log('row', this.row)
        }
    }
</script>

<style scoped>

</style>