<template>
<div id="runnercheckinwrapper">
  <div id="runnercheckin">
    <h1>Runner Check In</h1>
    <v-form id="runnercheckinform" v-model="valid" ref="form" lazy-validation>
        <v-text-field
      label="Name"
      v-model="name"
    ></v-text-field>
      <v-text-field
      label="Bib #"
      v-model="bibNumber"
    ></v-text-field>
      <v-switch :label="`Photo ID: ${photoId.toString()}`" v-model="photoId"></v-switch>
       <v-switch :label="`CORSAR Card: ${corsarCard.toString()}`" v-model="corsarCard"></v-switch>
       <v-switch :label="`Signed Waiver: ${signedWaiver.toString()}`" v-model="signedWaiver"></v-switch>
        <v-switch :label="`Vehicle Pass Given to Crew: ${crewPass.toString()}`" v-model="crewPass"></v-switch>
           <v-switch :label="`Pre-Race Photo: ${preRacePhoto.toString()}`" v-model="preRacePhoto"></v-switch>
            <v-switch :label="`Runner Survey Complete: ${runnerSurvey.toString()}`" v-model="runnerSurvey"></v-switch>
     <v-container class="radio-btn" fluid>
       <h4>Shirt Size</h4>
       <v-radio-group v-model="sex" row>
      <v-radio label="Men's" value="Men's" ></v-radio>
      <v-radio label="Women's" value="Women's"></v-radio>
    </v-radio-group>
    <v-radio-group v-model="size" row>
      <v-radio label="XS" value="X-Small" ></v-radio>
       <v-radio label="S" value="Small" ></v-radio>
        <v-radio label="M" value="Medium" ></v-radio>
         <v-radio label="L" value="Large" ></v-radio>
          <v-radio label="XL" value="X-Large" ></v-radio>
    </v-radio-group>
  </v-container>
       <v-container class="radio-btn" fluid>
       <h4>Sock Size</h4>
       <v-radio-group v-model="sockSex" row>
      <v-radio label="Men's" value="Men's" ></v-radio>
      <v-radio label="Women's" value="Women's"></v-radio>
    </v-radio-group>
    <v-radio-group v-model="sockSize" row>
      <v-radio label="XS" value="X-Small" ></v-radio>
       <v-radio label="S" value="Small" ></v-radio>
        <v-radio label="M" value="Medium" ></v-radio>
         <v-radio label="L" value="Large" ></v-radio>
          <v-radio label="XL" value="X-Large" ></v-radio>
    </v-radio-group>
  </v-container>
    <v-text-field
      label="Location Staying"
      v-model="locationStaying"
    ></v-text-field>
      <v-switch label="Shoe Bath" v-model="shoeBath" value="Yes"></v-switch>
     <v-text-field
      label="Shoe Bath Notes"
      v-model="shoeBath"
    ></v-text-field>
        <v-text-field
      label="Medical Conditions"
      v-model="medicalCondition"
      placeholder="None"
    ></v-text-field>
    <v-text-field
      label="Current Medications"
      v-model="medication"
      placeholder="None"
    ></v-text-field>
    <div class="text-xs-center roster-link">
      <p id="submissionconfirmation" v-model="submissionText">{{submissionText}}</p>
        <v-btn  @click="addNewRunner"
                :disabled="!valid"
                round color="secondary"
                class="btn-roster"
                large dark>
          Submit
        </v-btn>
        <v-btn @click="clear" round color="secondary" class="btn-roster" large dark>
          Clear
        </v-btn>
         <router-link class="nav-link-roster" :to="{ name: 'Access'}">
        <v-btn round color="secondary" class="btn-roster" large dark>
          Back
        </v-btn>
      </router-link>
    </div>
  </v-form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'RunnerCheckIn',
  data: () => ({
    photoId: false,
    corsarCard: false,
    runnerSurvey: false,
    preRacePhoto: false,
    crewPass: false,
    signedWaiver: false,
    valid: true,
    checkbox: false,
    submissionText: '',
    id: 0,
    bibNumber: 0,
    name: '',
    shirtSize: '',
    locationStaying: '',
    shoeBath: '',
    medicalCondition: '',
    medication: '',
    sex: [],
    size: [],
    sockSex: [],
    sockSize: [],
  }),
  methods: {
    addNewRunner() {
      this.$store
        .dispatch('addRunner', {
          photoId: this.photoId,
          corsarCard: this.corsarCard,
          runnerSurvey: this.runnerSurvey,
          preRacePhoto: this.preRacePhoto,
          crewPass: this.crewPass,
          signedWaiver: this.signedWaiver,
          bibNumber: this.bibNumber,
          name: this.name,
          shirtSize: `${this.sex} ${this.size}`,
          sockSize: `${this.sockSex} ${this.sockSize}`,
          locationStaying: this.locationStaying,
          shoeBath: this.shoeBath,
          medicalCondition: this.medicalCondition,
          medication: this.medication,
        })
        .then(() => this.confirmSubmission())
        .then(() => this.clear())
        .then(() => {
          setTimeout(() => {
            self.$router.push({
              name: 'RunnerCheckIn',
            })
          }, 1500)
        })
        .catch(err => console.log('Request failed', err))
    },
    clear() {
      this.$refs.form.reset()
    },
    confirmSubmission() {
      this.submissionText = 'Submission successful!'
      setTimeout(() => {
        this.submissionText = ''
      }, 1500)
    },
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  padding-top: 20px;
}
#runnercheckinform {
  margin-top: 5%;
  padding: 5% 10%;
  color: white;
  background-color: #cba37f;
}

#runnercheckinwrapper {
  display: flex;
  justify-content: center;
}

#runnercheckin {
  width: 80vw;
  align-self: center;
}

#runnercheckinform {
  justify-content: space-around;
  width: 80vw;
}

#submissionconfirmation {
  margin: 1vh;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 300;
  background-color: green;
}
.radio-btn {
  color: #525050;
  padding: 0;
}
</style>
