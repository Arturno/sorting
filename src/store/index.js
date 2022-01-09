import { createStore } from 'vuex'

export default createStore({
  state: {
    numbers: {},
    data: ''
  },
  mutations: {
    addNumbers(state){
      var numbers = []
      for(var i=0; i<10; i++){
        var num = Math.floor(Math.random() * (100));
        if(!numbers.includes(num)){
          numbers.push(num)
        }else{
          i--
          continue
        }
      }
      for(var j in numbers){
        state.numbers[j] = {number: numbers[j], used: false}
      }
    }
  },
  actions: {
    async bubbleSort({state}){
      const timer = ms => new Promise(res => setTimeout(res, ms))
      var is_done = false
      var keys = Object.keys(state.numbers)
      while(!is_done){
        is_done = true
        for(var key in state.numbers){
          var nextIndex = keys.indexOf(key) +1;
          if(state.numbers[nextIndex]){
            state.numbers[key].used = true
            state.numbers[nextIndex].used = true
            await timer(100)
            for(var key2 in state.numbers){
              state.numbers[key2].used = false
            }
            if(state.numbers[key].number > state.numbers[nextIndex].number){
            var tmp = state.numbers[nextIndex]
            state.numbers[nextIndex] = state.numbers[key]
            state.numbers[key] = tmp
            is_done = false
            }
          }
        }
      }
    },
    async insertionSort({state}){
      const timer = ms => new Promise(res => setTimeout(res, ms))
      var keys = Object.keys(state.numbers)
      for(var key in state.numbers){
        var tmp = state.numbers[key]
        var prevIndex = keys.indexOf(key) - 1;
        state.data = state.numbers[key].number
        while(prevIndex >= 0 && state.numbers[prevIndex].number > tmp.number){
          state.numbers[prevIndex].used = true
          await timer(200)
          for(var key2 in state.numbers){
            state.numbers[key2].used = false
          }
          state.numbers[prevIndex + 1] = state.numbers[prevIndex]
          prevIndex = prevIndex-1;
        }
        state.numbers[prevIndex +1] = tmp
      }
    }
  },
  modules: {
  }
})
