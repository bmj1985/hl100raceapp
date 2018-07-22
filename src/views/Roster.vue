<template>
<v-container class="roster">
  <div class="page-header">
    <h1 align-center><span>{{title_span1}}</span> {{title}} <span>{{title_span2}}</span></h1>
  </div>
  <v-layout column align-center class="logo">
    <v-card color="taupe">
      <v-card-title>
        Runner List
        <v-spacer></v-spacer>
        <v-text-field append-icon="search" label="Search" single-line hide-details v-model="search"></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="runners" :search="search">
        <template slot="items" slot-scope="props" color="secondary">
        <td>{{ props.item.bibNum }}</td>
      <td class="text-xs-left">{{props.item.firstName}}</td>
       <td class="text-xs-left">{{props.item.lastName}}</td>
          <td class="layout px-0">
        <v-icon
          small
          class="mr-2"
        >
          edit
        </v-icon>
      </td>
      </template>
        <v-alert slot="no-results" :value="true" color="error">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
    <div class="text-xs-center roster-link">
      <router-link class="nav-link-roster" :to="{ name: 'Access'}">
        <v-btn round color="secondary" class="btn-roster" large dark>
          Back
        </v-btn>
      </router-link>
      <router-link class="nav-link-roster" :to="{ name: 'RunnerCheckIn'}">
        <v-btn round color="secondary" class="btn-roster" large dark>
          add
        </v-btn>
      </router-link>
    </div>
  </v-layout>
</v-container>

</template>

<script>
export default {
  name: 'Roster',
  data() {
    return {
      title: 'RUNNERS',
      title_span1: 'TRAIL',
      title_span2: 'ROSTER',
      search: '',
      headers: [
        {
          text: 'Bib #',
          align: 'left',
          sortable: true,
          value: 'bibNumber',
        },
        {
          text: 'First Name',
          align: 'left',
          sortable: true,
          value: 'name',
        },
        {
          text: 'Last Name',
          align: 'left',
          sortable: true,
          value: 'name',
        },
        { text: 'Actions', value: 'Edit', sortable: false, align: 'left' },
      ],
    }
  },
  computed: {
    runners() {
      return this.$store.state.runners
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.roster {
  /* padding: 0;
  margin: 0; */
  align-self: center;
}
div.card {
  width: 90vw;
  height: 80vh;
}
.page-header {
  border: 6px solid #848181;
  background-color: #5b6789;
  padding: 0;
  margin-bottom: 20px;
  width: 100%;
}
h1 {
  width: 100%;
  text-align: center;
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
.roster-link {
  margin-top: 75px;
}

.nav-link-roster .btn-roster {
  color: #a97c54;
  font-size: 2rem;
  height: 3rem;
  width: 10rem;
  margin-bottom: 25px;
}

.nav-link-roster {
  text-decoration: none;
}
</style>
