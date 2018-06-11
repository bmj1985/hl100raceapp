<template>
    <v-container grid-list-xl>
      <v-layout v-bind="layout" wrap>
          <v-flex  v-for="aidStation in aidStations" v-bind="itemLayout">
            <v-card dark class="aid-station" >
              <router-link class="nav-link" :to="{ name: 'AidStation', params: {name: stripSpaces(aidStation)}}">
                  <v-card-text>{{aidStation}}</v-card-text>
              </router-link>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'PickAidStation',
  data: () => {
    return {
      aidStations: [
        'Rasberry',
        'Antero',
        'St. Elmo',
        'Cottonwood',
        'Hancock',
        'Lost Wonder',
        'Purgatory',
        'Monarch',
        'Fooses',
        'Blankes',
        'Rasberry Two'
      ],
      title: 'LONESOME',
      title_span1: 'HIGH',
      title_span2: '100'
    }
  },
  computed: {
    layout() {
      const binding = {}
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true
      return binding
    },
    itemLayout() {
      const binding = {}
      if (this.$vuetify.breakpoint.smAndDown) binding.xs12 = true
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
