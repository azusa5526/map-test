import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import GmapVue from 'gmap-vue';

Vue.config.productionTip = false;

// Gmap-vue
Vue.use(GmapVue, {
	load: {
		key: 'AIzaSyBFBgjXt5avBkC9bgu9zTSEmLbWIKiH8OA',
		libraries: 'places,drawing,visualization'
	},
	installComponents: true
});

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App)
}).$mount('#app');
