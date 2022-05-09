import { createApp } from 'vue'
import App from './App.vue'
import moment from 'moment'
import "./assets/tailwind.css"
import router from "./router"



const app = createApp(App)
app.use(router)

app.config.globalProperties = {
    formatDate(date) {
    return moment(date).format('DD.MM.YYYY')
},
} 

app.mount('#app')
