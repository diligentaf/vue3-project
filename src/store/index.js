import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // store data of our app
    counter: 0,
    colorCode: 'red'
  },
  mutations: {
    // change data in the state by "committing"
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    }
  },
  actions: {
    // can access the state but can't change it... "dispatch actions"
    increaseCounter({ commit }) {
      axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      ).then((response) => {
        commit('increaseCounter', response.data)
      })
    },
    decreaseCounter({ commit }) {
      axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      ).then((response) => {
        commit('decreaseCounter', response.data)
      })
    },
    setColorCode({ commit }, newValue) {
      commit('setColorCode', newValue)
    }
  },
  getters: {
    // getting and filtering the data
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: {
    // different modules (ex - shoppingList vuex, campain vuex)
  }
})
