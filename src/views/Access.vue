<template>
    <v-container class="access access-page">
      <v-layout column align-center class="access-wrap">
        <h1><span>{{title_span1}}</span> {{title}} <span>{{title_span2}}</span></h1>
        <div class="text-xs-center tri-links">
          <router-link class="nav-link" :to="{ name: 'RunnerCheckIn'}">
            <v-btn round color="blue" large dark>
              Runner Checkin
            </v-btn>
          </router-link>
          <router-link class="nav-link" :to="{ name: 'PickAidStation'}">
            <v-btn round color="taupe" large dark>
              Aid Stations
            </v-btn>
          </router-link>
        </div>
        <div class="text-xs-center home-link">
          <router-link class="nav-link-home" :to="{ name: 'LandingPage'}">
            <v-btn round color="secondary" class="btn-home" large dark>
              Home
            </v-btn>
          </router-link>
        </div>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'Access',
  data() {
    return {
      title: 'HIGH LONESOME 100',
    }
  },
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
}
.access-page {
  height: 700px;
}
span {
  font-weight: 400;
}
.tri-links {
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  margin-top: 100px;
}
.tri-links button {
  margin-bottom: 30px;
}
.home-link {
  margin-top: 140px;
}
.nav-link .btn {
  color: #303131;
  font-size: 2rem;
  height: 5rem;
  width: 25rem;
}
.nav-link {
  text-decoration: none;
}
.nav-link-home {
  text-decoration: none;
}
.nav-link-home .btn-home {
  color: #a97c54;
  font-size: 2rem;
  height: 5rem;
  width: 15rem;
}
</style>
