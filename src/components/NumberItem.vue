<template>
    <button type="button" :class="[get.used ? 'btn-success' : 'btn-secondary', 'btn']" disabled>
    {{get.number}}
    </button>
</template>

<script>
export default {
    name: 'NumberItem',
    props:{
        id: String
    },
    computed:{
        get(){
            return this.$store.state.numbers[this.id]
        }
    }
}
</script>
<style scoped>
button{
    margin:1px;
}
</style>