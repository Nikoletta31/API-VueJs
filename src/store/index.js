import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'


Vue.use(Vuex);

const base_url = "http://localhost:3000/fruit";

export default new Vuex.Store({
  state: {
    fruits:[]
  },
 
  actions: {
 /* Function to filter the data and to exctract only 'isFruit=true' */

    exploreData({commit, dispatch}, data) {
      for (const [key, value] of Object.entries(data)) {
      if(typeof(value) == 'object') {
          if(value.isFruit && value.id) {
            console.log(key)
            commit('SET_FRUIT',value)
                 }
           else {
dispatch('exploreData', value)
           }
        }
}
},

 /* API GET call request */

   async getFruits({ dispatch}) {
   
    try {
      const response = await axios.get(base_url)
      dispatch('exploreData', response.data.data)
    } catch (error) {
      console.log(error)
    }
    }, 
  
     /* API POST call request */

   async addNewFruit({commit}, datas) {
     try {
      const response = await axios.post(base_url, datas);
      commit('SET_FRUIT',response.data) 
      return true;
     } catch (error) {
       console.log(error)
       return false
     }
      }, 

     /* API DELETE call request */

    async removeFruit({commit}, item) {
      try {
        await axios.delete(`${base_url}/${item.id}`);
        commit('DELETE_FRUIT',item)
      } catch (error) {
        console.log(error)
      }
      }
  },
  mutations: {
    
    SET_FRUIT(state, datas) {
      state.fruits.push(datas)
    }, 
    DELETE_FRUIT(state, item) {
      var index = state.fruits.findIndex(c => c.id == item.id);
      state.fruits.splice(index, 1);
    }
    },
  modules: {}, 

  
});
