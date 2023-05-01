import Vue from 'vue'
import Vuex from 'vuex'
import TicketService from "@/services/TicketService";

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      ticketss:[]
  },
  getters: {
  },
  mutations: {
    setTickets (state, list) {
      state.tickets = list
    }
  },
  actions: {
    async getTickets(store){
      try {
         store.commit('setTickets', (await TicketService.findAll()).data);
         return this.state.ticketss
      } catch (error) {
         // this.error = error
      }        
  }
  },
  modules: {
  }
})
