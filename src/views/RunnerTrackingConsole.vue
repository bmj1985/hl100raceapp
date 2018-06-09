<template>
<div class="runner-tracking">
    <v-container fluid class="ma-0 pa-0">
      <v-layout column align-center class="logo">
        <h1><span>{{title_span1}}</span> {{title}} <span>{{title_span2}}</span></h1>
        <div class="text-xs-center trail-link">
          <router-link class="nav-link-trail" :to="{ name: 'Access'}">
            <v-btn round color="secondary" class="btn-trail" large dark>
              HOME
            </v-btn>
          </router-link>
        </div>
      </v-layout>
    </v-container>
    <v-container fluid class="ma-0 pa-0">
    <StatBar :arrayBegin="0" :arrayEnd="14"></StatBar>
     <v-layout row>
     <img id="coursemap" src="../assets/courseMap.png" />
    <!-- <RunnerList id="runnerlist" :runners="runners"/> -->
    <LocationList id="locationlist" :runners="runners"/>
    </v-layout>
    <StatBar :arrayBegin="14" :arrayEnd="27"></StatBar>
    </v-container>
</div>
</template>

<script>
import RunnerList from '@/components/RunnerList'
import LocationList from '@/components/LocationList'
import StatBar from '@/components/StatBar'
export default {
  name: 'RunnerTrackingConsole',
  components: {
    RunnerList, StatBar, LocationList
  },
  data () {
    return {
      title: 'LONESOME',
      title_span1: 'HIGH',
      title_span2: '100'
    }
  },
  created () {
    this.$store.dispatch('listRunners')
  },
  computed: {
    runners () {
      return this.$store.state.runners
    }
  }
}
</script>

<style scoped>
#coursemap {
  height: 65vh;
}
.stat-bar {
  width: 100vw;
  overflow: scroll;
}
#runnerlist {
  height: 65vh;
  overflow: scroll;
}
span {
  font-weight: 400;
}

.btn {
  font-size: 2rem;
  height: 5rem;
  width: 25rem;
}

.nav-link {
  color: #303131;
  text-decoration: none;
}

.nav-link-trail .btn-trail {
  color: #A97C54;
  font-size: 2rem;
  height: 3rem;
  width: 10rem;
  margin-bottom: 25px;
}

.nav-link-trail {
  text-decoration: none;
}
</style>
