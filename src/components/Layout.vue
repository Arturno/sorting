<template>
<nav class="navbar navbar-expand-sm navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="btn btn-success" v-on:click="addNumbers">Add numbers</button>
        </li>
        <li class="nav-item">
          <button class="btn btn-secondary" v-on:click="bubbleSort">Bubble Sort</button>
          <button class="btn btn-secondary" v-on:click="insertionSort">Insertion Sort</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <transition-group name="list-complete">
    <NumberItem v-for="val,key in getNumbers" :key="key" :id="key" />
  </transition-group>
  <br>
  {{getData}}
  <br>
</template>

<script>
import NumberItem from './NumberItem.vue'

export default {
  name: 'Layout',
  components: {NumberItem},
  methods:{
    addNumbers(){
      this.$store.commit('addNumbers')
    },
    bubbleSort(){
      this.$store.dispatch('bubbleSort')
    },
    insertionSort(){
      this.$store.dispatch('insertionSort')
    }
  },
  computed:{
    getNumbers(){
      return this.$store.state.numbers
    },
    getData(){
      return this.$store.state.data
    }
  }
}
</script>

<style scoped>
.list-complete-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>