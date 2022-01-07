const App = {
  data() {
    return {
      height: '',
      count: '',
      result: 0,
      check: false
    }
  },
  methods: {
    getResult () {
      this.result = ((+this.height-this.count*2.05)/(+this.count+1)).toFixed(2)
      if(this.result != 0){
        this.check = true
      }else{
        this.check = false
      }
    }
  }
}

Vue.createApp(App).mount("#app")