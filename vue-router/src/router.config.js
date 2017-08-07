import Home from './components/Home/Home.vue'
import Politics from './components/Politics/Politics.vue'
import Annals from './components/Annals/Annals.vue'
import Gallery from './components/Gallery/Gallery.vue'
import Military from './components/Military/Military.vue'
import War from './components/War/War.vue'
import Society from './components/Society/Society.vue'
import Details from './components/Details/Details.vue'


export default[
  {path:'/home', component: Home},
  {path:'/politics', component: Politics},
  {path:'/annals', component: Annals},
  {path:'/gallery', component: Gallery},
  {path:'/military', component: Military},
  {path:'/war', component: War},
  {path:'/society', component: Society}, 
  //{path:'/details/:Date',name:'Details',component: Details},
  {path:'/details/',name:'details',component:Details},
  {path:'/', redirect: 'home'}
]
