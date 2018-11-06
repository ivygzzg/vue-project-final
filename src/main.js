import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'
// locale can be 'zh' , 'en' , 'es', 'pt-br', 'ja', 'ko', 'fr', 'it', 'ru', 'de', 'vi', 'ua', 'no, 'no-nn'
Vue.use(vueEventCalendar, {locale: 'en'}) 
Vue.use(VModal)
Vue.use(ElementUI)

Vue.config.productionTip = false

// Vue.component(Button.name, Button);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


 

