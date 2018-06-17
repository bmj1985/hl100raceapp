import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

const BASE_URL = 'https://hl100-runnertracking.herokuapp.com/api/beta/runners'

export default new Vuex.Store({
  state: {
    runners: [],
    locations: [
      {
        name: 'Zone 1',
        code: 'z1',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'ra1',
        name: 'Rasberry',
        cutoff: '2018-08-03 08:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 2',
        code: 'z2',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'ant',
        name: 'Antero',
        cutoff: '2018-08-03 13:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 3',
        code: 'z3',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'ste1',
        name: 'St. Elmo One',
        cutoff: '2018-08-03 15:30',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 4',
        code: 'z4',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'cot',
        name: 'Cottonwood',
        cutoff: '2018-08-03 18:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 5',
        code: 'z5',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'ste2',
        name: 'St. Elmo Two',
        cutoff: '2018-08-03 20:30',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 6',
        code: 'z6',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'han',
        name: 'Hancock',
        cutoff: '2018-08-04 01:30',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 7',
        code: 'z7',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'los',
        name: 'Lost Wonder',
        cutoff: '2018-08-04 04:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 8',
        code: 'z8',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'pur',
        name: 'Purgatory',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 9',
        code: 'z9',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'mon',
        name: 'Monarch',
        cutoff: '2018-08-04 09:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 10',
        code: 'z10',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'foo',
        name: 'Fooses',
        cutoff: '2018-08-04 11:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 11',
        code: 'z11',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'bla',
        name: 'Blanks',
        cutoff: '2018-08-04 14:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 12',
        code: 'z12',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'ra2',
        name: 'Rasberry Two',
        cutoff: '2018-08-04 16:45',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
      {
        name: 'Zone 13',
        code: 'z13',
        type: 'zone',
        numberOfRunners: 0,
      },
      {
        code: 'fin',
        name: 'Finish',
        cutoff: '2018-08-04 18:00',
        type: 'aidStation',
        timeLeft: '',
        numberOfRunners: 0,
      },
    ],
  },
  mutations: {
    listRunners(state, payload) {
      state.runners = payload
    },
    timeLeft(state) {
      return state.locations.map(location => {
        const now = moment()
        const end = moment(location.cutoff)
        const duration = moment.duration(end.diff(now))
        let hours = duration.asHours() - (duration.asHours() % 1)
        let minutes = duration.asMinutes() % 60
        let seconds = duration.asSeconds() % 60
        location.timeLeft = `${hours}:${Math.round(minutes)
          .toString()
          .padStart(2, '0')}:${Math.round(seconds)
          .toString()
          .padStart(2, '0')}`
      })
    },
    zoneOneRunners(state) {
      return state.locations
        .filter(location => location.code === 'z1')
        .map(location => {
          location.numberOfRunners = this.getters.zoneOne.length
        })
    },
    zoneTwoRunners(state) {
      return state.locations
        .filter(location => location.code === 'z2')
        .map(location => {
          location.numberOfRunners = this.getters.zoneTwo.length
        })
    },
    zoneThreeRunners(state) {
      return state.locations
        .filter(location => location.code === 'z3')
        .map(location => {
          location.numberOfRunners = this.getters.zoneThree.length
        })
    },
    zoneFourRunners(state) {
      return state.locations
        .filter(location => location.code === 'z4')
        .map(location => {
          location.numberOfRunners = this.getters.zoneFour.length
        })
    },
    zoneFiveRunners(state) {
      return state.locations
        .filter(location => location.code === 'z5')
        .map(location => {
          location.numberOfRunners = this.getters.zoneFive.length
        })
    },
    zoneSixRunners(state) {
      return state.locations
        .filter(location => location.code === 'z6')
        .map(location => {
          location.numberOfRunners = this.getters.zoneSix.length
        })
    },
    zoneSevenRunners(state) {
      return state.locations
        .filter(location => location.code === 'z7')
        .map(location => {
          location.numberOfRunners = this.getters.zoneSeven.length
        })
    },
    zoneEightRunners(state) {
      return state.locations
        .filter(location => location.code === 'z8')
        .map(location => {
          location.numberOfRunners = this.getters.zoneEight.length
        })
    },
    zoneNineRunners(state) {
      return state.locations
        .filter(location => location.code === 'z9')
        .map(location => {
          location.numberOfRunners = this.getters.zoneNine.length
        })
    },
    zoneTenRunners(state) {
      return state.locations
        .filter(location => location.code === 'z10')
        .map(location => {
          location.numberOfRunners = this.getters.zoneTen.length
        })
    },
    zoneElevenRunners(state) {
      return state.locations
        .filter(location => location.code === 'z11')
        .map(location => {
          location.numberOfRunners = this.getters.zoneEleven.length
        })
    },
    zoneTwelveRunners(state) {
      return state.locations
        .filter(location => location.code === 'z12')
        .map(location => {
          location.numberOfRunners = this.getters.zoneTwelve.length
        })
    },
    zoneThirteenRunners(state) {
      return state.locations
        .filter(location => location.code === 'z13')
        .map(location => {
          location.numberOfRunners = this.getters.zoneThirteen.length
        })
    },
    rasberryRunners(state) {
      return state.locations
        .filter(location => location.code === 'ra1')
        .map(location => {
          location.numberOfRunners = this.getters.rasberry.length
        })
    },
    anteroRunners(state) {
      return state.locations
        .filter(location => location.code === 'ant')
        .map(location => {
          location.numberOfRunners = this.getters.antero.length
        })
    },
    stElmoRunners(state) {
      return state.locations
        .filter(location => location.code === 'ste1')
        .map(location => {
          location.numberOfRunners = this.getters.stElmo.length
        })
    },
    cottonwoodRunners(state) {
      return state.locations
        .filter(location => location.code === 'cot')
        .map(location => {
          location.numberOfRunners = this.getters.cottonwood.length
        })
    },
    stElmoTwoRunners(state) {
      return state.locations
        .filter(location => location.code === 'ste2')
        .map(location => {
          location.numberOfRunners = this.getters.stElmoTwo.length
        })
    },
    hancockRunners(state) {
      return state.locations
        .filter(location => location.code === 'han')
        .map(location => {
          location.numberOfRunners = this.getters.hancock.length
        })
    },
    lostWonderRunners(state) {
      return state.locations
        .filter(location => location.code === 'los')
        .map(location => {
          location.numberOfRunners = this.getters.lostWonder.length
        })
    },
    purgatoryRunners(state) {
      return state.locations
        .filter(location => location.code === 'pur')
        .map(location => {
          location.numberOfRunners = this.getters.purgatory.length
        })
    },
    monarchRunners(state) {
      return state.locations
        .filter(location => location.code === 'mon')
        .map(location => {
          location.numberOfRunners = this.getters.monarch.length
        })
    },
    foosesRunners(state) {
      return state.locations
        .filter(location => location.code === 'foo')
        .map(location => {
          location.numberOfRunners = this.getters.fooses.length
        })
    },
    blanksRunners(state) {
      return state.locations
        .filter(location => location.code === 'bla')
        .map(location => {
          location.numberOfRunners = this.getters.blanks.length
        })
    },
    rasberryTwoRunners(state) {
      return state.locations
        .filter(location => location.code === 'ra2')
        .map(location => {
          location.numberOfRunners = this.getters.rasberryTwo.length
        })
    },
  },
  actions: {
    listRunners(store) {
      fetch(`${BASE_URL}`)
        .then(response => response.json())
        .then(runners => {
          store.commit('listRunners', runners)
        })
      setInterval(() => {
        fetch(`${BASE_URL}`)
          .then(response => response.json())
          .then(runners => {
            store.commit('listRunners', runners)
          })
      }, 20000)
    },
    timeLeft(store) {
      setInterval(() => {
        store.commit('timeLeft')
      }, 1000)
    },
    numberOfRunners(store) {
      setInterval(() => {
        store.commit('zoneOneRunners')
        store.commit('zoneTwoRunners')
        store.commit('zoneThreeRunners')
        store.commit('zoneFourRunners')
        store.commit('zoneFiveRunners')
        store.commit('zoneSixRunners')
        store.commit('zoneSevenRunners')
        store.commit('zoneEightRunners')
        store.commit('zoneNineRunners')
        store.commit('zoneTenRunners')
        store.commit('zoneElevenRunners')
        store.commit('zoneTwelveRunners')
        store.commit('zoneThirteenRunners')
        store.commit('rasberryRunners')
        store.commit('anteroRunners')
        store.commit('stElmoRunners')
        store.commit('cottonwoodRunners')
        store.commit('stElmoTwoRunners')
        store.commit('hancockRunners')
        store.commit('lostWonderRunners')
        store.commit('monarchRunners')
        store.commit('foosesRunners')
        store.commit('blanksRunners')
        store.commit('rasberryTwoRunners')
      }, 20000)
    },
  },
  getters: {
    aidStations(state) {
      return state.locations.filter(location => location.type === 'aidStation')
    },
    aidStationByCode: state => code => {
      return state.locations
        .filter(location => location.type === 'aidStation')
        .find(aidStation => aidStation.code === code)
    },
    runnerByBibNum: state => bibNum => {
      if (!state.runners) return null
      return state.runners.find(runner => runner.bibNumber === bibNum)
    },

    zoneOne: state => {
      return state.runners.filter(
        runner => runner.Started === true && runner.RasberryOneIn === null
      )
    },
    zoneTwo: state => {
      return state.runners.filter(
        runner => runner.RasberryOut != null && runner.AnteroIn === null
      )
    },
    zoneThree: state => {
      return state.runners.filter(
        runner => runner.AnteroOut != null && runner.StElmoOneIn === null
      )
    },
    zoneFour: state => {
      return state.runners.filter(
        runner => runner.StElmoOneOut != null && runner.CottonwoodIn === null
      )
    },
    zoneFive: state => {
      return state.runners.filter(
        runner => runner.CottonwoodOut != null && runner.StElmoTwoIn === null
      )
    },
    zoneSix: state => {
      return state.runners.filter(
        runner => runner.StElmoTwoOut != null && runner.HancockIn === null
      )
    },
    zoneSeven: state => {
      return state.runners.filter(
        runner => runner.HancockOut != null && runner.LostWonderIn === null
      )
    },
    zoneEight: state => {
      return state.runners.filter(
        runner => runner.LostWonderOut != null && runner.PurgatoryIn === null
      )
    },
    zoneNine: state => {
      return state.runners.filter(
        runner => runner.PurgatoryOut != null && runner.MonarchIn === null
      )
    },
    zoneTen: state => {
      return state.runners.filter(
        runner => runner.MonarchOut != null && runner.FoosesIn === null
      )
    },
    zoneEleven: state => {
      return state.runners.filter(
        runner => runner.FoosesOut != null && runner.BlanksIn === null
      )
    },
    zoneTwelve: state => {
      return state.runners.filter(
        runner => runner.BlanksOut != null && runner.RasberryTwoIn === null
      )
    },
    zoneThirteen: state => {
      return state.runners.filter(
        runner => runner.RasberryTwoOut != null && runner.Finish === null
      )
    },
    rasberry: state => {
      return state.runners.filter(
        runner => runner.RasberryOneIn != null && runner.RasberryOneOut === null
      )
    },
    antero: state => {
      return state.runners.filter(
        runner => runner.AnteroIn != null && runner.AnteroOut === null
      )
    },
    stElmo: state => {
      return state.runners.filter(
        runner => runner.StElmoOneIn != null && runner.StElmoOneOut === null
      )
    },
    cottonwood: state => {
      return state.runners.filter(
        runner => runner.CottonwoodIn != null && runner.CottonwoodOut === null
      )
    },
    stElmoTwo: state => {
      return state.runners.filter(
        runner => runner.StElmoTwoIn != null && runner.StElmoTwoOut === null
      )
    },
    hancock: state => {
      return state.runners.filter(
        runner => runner.HancockIn != null && runner.HancockOut === null
      )
    },
    lostWonder: state => {
      return state.runners.filter(
        runner => runner.LostWonderIn != null && runner.LostWonderOut === null
      )
    },
    purgatory: state => {
      return state.runners.filter(
        runner => runner.PurgatoryIn != null && runner.PurgatoryOut === null
      )
    },
    monarch: state => {
      return state.runners.filter(
        runner => runner.MonarchIn != null && runner.MonarchOut === null
      )
    },
    fooses: state => {
      return state.runners.filter(
        runner => runner.FoosesIn != null && runner.FoosesOut === null
      )
    },
    blanks: state => {
      return state.runners.filter(
        runner => runner.BlanksIn != null && runner.BlanksOut === null
      )
    },
    rasberryTwo: state => {
      return state.runners.filter(
        runner => runner.RasberryTwoIn != null && runner.RasberryTwoOut === null
      )
    },
  },
})
