import Vue from 'vue/dist/vue.js'
import App from '@/App'

Vue.config.productionTip = false

new Vue({
    render(h){
      return h(App)
    }
  }
).$mount('#app')

const x = 1
if(x===1){
  console.log(1)
}
