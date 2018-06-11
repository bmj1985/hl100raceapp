import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const BASE_URL = 'https://hl100-runnertracking.herokuapp.com/api/beta/runners'

export default new Vuex.Store({
  state: {
    runners: [],
    aidStationCutoffs: {}
  },
  mutations: {
    listRunners (state, payload) {
      state.runners = payload
    },
    getAidStationCutoffs (state, payload) {
      state.aidStationCutoffs = payload
    }
  },
  actions: {
    listRunners (store) {
      fetch(`${BASE_URL}`)
        .then(response => response.json())
        .then((runners) => {
          store.commit('listRunners', runners)
        })
    },
    getAidStationCutoffs (store) {
      const aidStationCutoffs = {
        rasberryOne: '2018-08-03 08:00',
        antero: '2018-08-03 13:00',
        stElmoOne: '2018-08-03 15:30',
        cottonwood: '2018-08-03 18:00',
        stElmoTwo: '2018-08-03 20:30',
        hancock: '2018-08-04 01:30',
        lostWonder: '2018-08-04 04:00',
        monarch: '2018-08-04 09:00',
        fooses: '2018-08-04 11:00',
        blanks: '2018-08-04 14:00',
        rasberryTwo: '2018-08-04 16:45',
        finish: '2018-08-04 18:00'
      }
      store.commit('getAidStationCutoffs', aidStationCutoffs)
    }
  },
  getters: {
    zoneOne: state => {
      return state.runners.filter(runner => runner.Started === null && runner.RasberryOneIn === null)
    }
  }
})
