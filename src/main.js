import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';

import 'bootstrap/dist/css/bootstrap.css';

import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faThumbsUp)

const pinia = createPinia();

createApp(App)
    .use(bootstrap)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(pinia)
    .mount('#app')
