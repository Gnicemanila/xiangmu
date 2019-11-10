import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vant from 'vant'
import 'vant/lib/index.css';
import './assets/style/reset.less'
import './variables.less';


import audio1 from "./assets/video/m1.mp3";
import audio2 from "./assets/video/m2.mp3";
Vue.prototype.openMusic = () => {
    let buttonAudio = document.getElementById('buttonAudio');
    buttonAudio.setAttribute('src', audio1);
    buttonAudio.setAttribute('loop','loop');
    //重复播放
    buttonAudio.play();
    //开始播放
}
Vue.prototype.closeMusic = () => {
  let buttonAudio = document.getElementById('buttonAudio');
  buttonAudio.pause();
}
document.body.addEventListener('click', function(e) {
    let event = e || window.event;
    let target = event.target || event.srcElement;
    let clickMusic = target.getAttribute('clickMusic')
    if (clickMusic === 'true') Vue.prototype.clickButton()
    else return false;
})
import Api from './api/api'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
Vue.prototype.$http=Api
import './mock/index'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
