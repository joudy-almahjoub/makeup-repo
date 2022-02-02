<template >
      <div>
        <v-container>
            <v-row>
                <v-col cols="12" justify="center" align="center">
                    <h2>Get In Touch</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" offset="2">
                    <v-form
                      ref="form"
                      v-model="valid"
                      lazy-validation
                    >
                      <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="Name"
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="Message"
                        :rules="nameRules"
                        label="Your Message"
                        required
                      ></v-text-field>
                      <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Do you agree?"
                        required
                      ></v-checkbox>
                      <v-btn
                        :disabled="!valid"
                        color="#faebd7"
                        class="mr-4"
                        @click="validate"
                      >
                        send
                      </v-btn>
                      <v-btn
                        class="mr-4"
                        @click="reset"
                        dark
                      >
                        Reset Form
                      </v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
      </div>
</template>
<script>
export default {
  data: () => ({
    Message: '',
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: false
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@300&display=swap');
h2{
  font-size: 30px;
  font-style:italic;
  color: antiquewhite;
  font-weight: 900;
  font-family: BioRhyme;

}
div{
 font-family: BioRhyme;
}
</style>
