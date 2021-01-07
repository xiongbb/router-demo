import { createApp } from 'vue'
import  store  from './store'
import router from './router'
import App from './App.vue'
import 'bulma/css/bulma.min.css'

createApp(App).use(store).use(router).mount('#app')
