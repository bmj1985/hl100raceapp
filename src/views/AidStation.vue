<template>
    <v-container class="aid-station" style="padding: 15px;">
  
      <v-layout column align-center justify-space-between>
        <v-layout row align-center justify-center style="width: 100%">
          <div> <span> {{title}} </span></div>
        </v-layout>
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
          <v-tab key="left">Left</v-tab>
          <v-tab key="left">History</v-tab>
        </v-tabs>
 
      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-layout column>
            <v-text-field
              prepend-icon="search"
              label="Search Bib #"
              solo-inverted
              type="number"
              v-model="searchBibNum"
              flat
            ></v-text-field>
            <v-layout row wrap mt-3 mb-4>
                <v-btn  v-for="(n,i) in 10" key="{{i}}" v-on:click="appendBibNum(i)" color="white"  fab="true" class="num">{{i}}</v-btn>
                <v-btn v-on:click="backSearch" color="white"  fab="true" class="num">Back</v-btn>
                <v-btn v-on:click="clearSearch" color="white"  fab="true" class="num">Clear</v-btn>
            </v-layout>
            <div class="runner" v-if="foundRunner">
              <v-layout row>
                <v-layout column>
                  <div class="headline">{{foundRunner.bibNumber}}</div>
                  <div>{{foundRunner.name}}</div>
                </v-layout>
                <v-layout column>
                  <v-btn small>In</v-btn>
                  <div>12:40</div>
                </v-layout>
                <v-layout column>
                  <v-btn small>Left</v-btn>
                  <div>12:40</div>
                </v-layout>
                <v-layout column>
                  <v-btn small>Copy Sync</v-btn>
                  <div>Copied</div>
                </v-layout>
            </v-layout>
            </div>
          </v-layout>
        </v-tab-item>
      </v-tabs-items>
    </div>
              <router-link style="margin-top: 10px;" class="nav-link-aid"  :to="{ name: 'PickAidStation'}">
            <v-btn  round color="secondary"  small dark>
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
      tabs: null,
      bibNumSnackbar: false
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
    },
    backSearch() {
      if (this.searchBibNum.length <= 0) return
      this.searchBibNum = this.searchBibNum.substring(
        0,
        this.searchBibNum.length - 1
      )
    }
  }
}
</script>

<style scoped>
.runner {
  background-color: #5b6789;
  color: white;
  padding: 5px;
}

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
