<template>
    <v-container class="aid-station">
      <v-layout column align-center justify-space-between>
        <h1> <span> {{title}} </span></h1>
        <div>
    
        <v-tabs
          slot="extension"
          v-model="tabs"
          centered
          slider-color="white"
          color="transparent"
        >
          <v-tab key="all">Find Bib</v-tab>
          <v-tab key="checkin">In</v-tab>
          <v-tab key="left">Leaving</v-tab>
          <v-tab key="left">History</v-tab>
        </v-tabs>
 
      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-layout column>
          <v-text-field
            prepend-icon="search"
            label="Search Bib #"
            solo-inverted
            disabled
            v-model="searchBibNum"
            flat
          ></v-text-field>
            <v-layout row wrap mt-3 mb-4>
                <v-btn  v-for="(n,i) in 10" key="{{i}}" v-on:click="appendBibNum(i)" color="white"  fab="true" class="num">{{i}}</v-btn>
                <v-btn v-on:click="clearSearch" color="white"  fab="true" class="num">Clear</v-btn>
            </v-layout>
            <v-card v-if="foundRunner" mb-3>
              <v-card-title primary-title>
                <div class="headline">{{foundRunner.bibNumber}}</div>
              </v-card-title>
              <span>{{foundRunner.name}}</span>
              <v-card-actions>
                <v-btn>In</v-btn>
                <v-btn>Leaving</v-btn>
                <v-btn>Sync</v-btn>
                <v-btn>Copy Sync</v-btn>
              </v-card-actions>
            </v-card>
          </v-layout>
          </v-tab-item>
      </v-tabs-items>
    </div>
        <router-link class="nav-link-aid" :to="{ name: 'PickAidStation'}">
          <v-btn round color="secondary" small dark>
            Back
          </v-btn>
        </router-link>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'PickAidStation',
  data: () => {
    return {
      searchBibNum: '',
      searchRunnerName: 'John Wright',
      title_span1: 'HIGH',
      title_span2: '100',
      tabs: null,
      bibNumSnackbar: false,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  computed: {
    foundRunner() {
      return this.$store.getters.runnerByBibNum(this.searchBibNum)
    },
    aidStation() {
      return this.$store.getters.aidStationByCode(this.$route.params.code)
    },
    title() {
      return this.aidStation.name.toUpperCase()
    },
    runners() {
      return this.$store.state.runners
    }
  },
  methods: {
    appendBibNum(num) {
      if (this.searchBibNum.length >= 3) {
        return
      }
      this.searchBibNum += String(num)
    },
    clearSearch() {
      this.searchBibNum = ''
    }
  }
}
</script>

<style scoped>
.search {
  margin-top: 10px;
}

.num {
  font-size: 16px;
}

.links {
  display: 'flex';
  flex-wrap: 'wrap';
}
span {
  font-weight: 400;
}
.warning {
  width: 100%;
  margin-top: 150px;
  border-radius: 70%;
  height: 125px;
  width: 225px;
  display: inline-block;
}
h2 {
  padding-top: 45px;
}
.aid-link {
  margin-top: 250px;
}
.nav-link-aid .btn-aid {
  color: #a97c54;
  font-size: 2rem;
  height: 3rem;
  width: 10rem;
  margin-bottom: 25px;
}
.nav-link-aid {
  text-decoration: none;
}
</style>
