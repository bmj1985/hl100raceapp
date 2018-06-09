<template>
  <v-data-table
    :headers="headers"
    :items="runners"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  name: 'LocationList',
  props: ['runners'],
  data () {
    return {
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'Bib Number', align: 'center', value: 'bibNumber' },
        { text: 'Time In', align: 'center', value: 'Started' },
        { text: 'Duration at Aid Station', align: 'center', value: 'Duration' }
      ]
    }
  },
  computed: {
      zoneOne () {
          return this.$store.state.runners.filter(runner => runner.Started === null && runner.RasberryOneIn === null)
      }
  }
}
</script>
<style scoped>
</style>
