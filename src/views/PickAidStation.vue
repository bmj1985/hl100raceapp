<template>
    <v-container grid-list-xl text-xs-center>
      <div class="page-header">
        <h1 align-center> <span>{{title}}</span></h1>
      </div>
      <v-layout v-bind="layout" wrap>
          <v-flex  v-for="aidStation in aidStations" v-bind="itemLayout" >
            <v-card dark class="aid-station" >
              <router-link class="nav-link" :to="{ name: 'AidStation', params: {code: aidStation.code}}">
                  <v-card-text class="card-text">{{aidStation.name}}</v-card-text>
              </router-link>
            </v-card>
          </v-flex>
      </v-layout>
    <router-link class="nav-link-roster" :to="{ name: 'Access'}">
      <v-btn round color="secondary" class="btn-roster" large dark>
        Back
      </v-btn>
    </router-link>

    </v-container>
</template>

<script>
export default {
  name: 'PickAidStation',
  data: () => {
    return {
      title: 'PICK AID STATION'
    }
  },
  computed: {
    aidStations() {
      return this.$store.state.aidStations
    },
    layout() {
      const binding = {}
      if (this.$vuetify.breakpoint.xs) binding.column = true
      return binding
    },
    itemLayout() {
      const binding = {}
      if (this.$vuetify.breakpoint.xs) binding.xs12 = true
      else binding.xs4 = true
      return binding
    }
  },
  methods: {
    stripSpaces(str) {
      return str.replace(/ /g, '')
    }
  }
}
</script>

<style scoped>
.page-header {
  border: 6px solid #848181;
  background-color: #5b6789;
  padding: 0;
  margin-bottom: 20px;
  width: 100%;
}

span {
  font-weight: 400;
}

.card-text {
  color: white;
  font-size: 18px;
}
h2 {
  padding-top: 45px;
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
