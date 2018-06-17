import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const BASE_URL = 'https://hl100-runnertracking.herokuapp.com/api/beta/runners'

export default new Vuex.Store({
  state: {
    runners: [],
    aidStations: [
      { code: 'ra1', name: 'Rasberry' },
      { code: 'ant', name: 'Antero' },
      { code: 'ste', name: 'St. Elmo' },
      { code: 'cot', name: 'Cottonwood' },
      { code: 'han', name: 'Hancock' },
      { code: 'los', name: 'Lost Wonder' },
      { code: 'pur', name: 'Purgatory' },
      { code: 'mon', name: 'Monarch' },
      { code: 'foo', name: 'Fooses' },
      { code: 'bla', name: 'Blankes' },
      { code: 'ra2', name: 'Rasberry Two' }
    ]
  },
  getters: {
    aidStationByCode: state => code => {
      return state.aidStations.find(aidStation => aidStation.code === code)
    },
    runnerByBibNum: state => bibNum => {
      if (!state.runners) return null
      return state.runners.find(runner => runner.bibNumber === bibNum)
    }
  },
  mutations: {
    listRunners(state, payload) {
      state.runners = payload
    }
  },
  actions: {
    listRunners(store) {
      fetch(`${BASE_URL}`)
        .then(response => response.json())
        .then(runners => {
          store.commit('listRunners', runners)
        })
    }
  }
})
