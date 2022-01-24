import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './index.css'
import router from './router/index'
// Create a new store instance.
const store = createStore({
    state () {
      return {
        selectedBus: {}
      }
    },
    mutations: {
      setBus(state, val) {
        state.selectedBus = val
      }
    }
})
createApp(App).use(router).use(store).mount('#app')

