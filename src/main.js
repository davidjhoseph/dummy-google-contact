import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Icon from'vue-material-design-icons/styles.css'
import Vuerouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex'
import data from './data'



Vue.use(Vuerouter);
Vue.use(Vuex)
const Store = new Vuex.Store({
  state: {
    users: data.user,
    search: ""
  },
  actions: {
    search({commit}, payload) {
      commit('search', payload)
    }
  },
  getters: {
    users: (state) => state.users,
    friends (state){
      return state.users.filter(function(user){
        if(user.isFriend){
          return user
        } 
        return null
      })
    },
    
    deleted (state) {
      return state.users.filter((user)=> {
        if(user.isDeleted){
          return user
        }
        return null
      })
    },
    undeleted (state) {
      return state.users.filter((user)=>{
        if(!user.isDeleted) {
          return user
        }
        return null
      })
    }
  },
  mutations: {
    createContact(state, payload) {
      state.users.unshift(payload);
    },
    deleted (state, payload) {
      state.users.remove(payload)
    },
    search (state, payload) {
      state.search = payload;
    }
  }
})
const router = new Vuerouter({
mode:'history',
routes: routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: Store
})
