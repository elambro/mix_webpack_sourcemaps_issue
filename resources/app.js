
import Vue from 'vue';
Vue.config.devtools      = true;

window.mainApp = new Vue({
    el: '#main-app',
    components: {
        'my-component': () => import('./MyComponent.vue')
    }
});