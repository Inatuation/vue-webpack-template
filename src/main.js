import { createApp } from 'vue';
import App from './App.vue';
{{importAxiosPlugin}}

const app = createApp(App);
{{useAxiosPlugin}}
app.mount('#app');