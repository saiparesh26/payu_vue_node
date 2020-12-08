<template>
  <div id="register">
    <h1 class="title is-2 has-text-centered">Register</h1>
    <div v-if="!created">
      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="e.g Alex Smith"
            required
            v-model="username"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
            required
            v-model="email"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" required v-model="password" />
        </div>
      </div>
      <div class="control">
        <button
          class="button is-primary mt-2"
          style="width:500px"
          :disabled="!isNotEmpty"
          @click="register"
        >
          Register
        </button>
      </div>
    </div>
    <div class="notification" v-else>
      <strong>Succesfully registered</strong>
    </div>
    <div>
      <div class="notification mt-2" v-if="alreadyExists">
        <strong>User already exists</strong>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      username: null,
      email: null,
      password: null,
      created: false,
      alreadyExists: false,
    };
  },
  computed: {
    isNotEmpty() {
      return this.username && this.email && this.password;
    },
  },
  methods: {
    register: function() {
      //   console.log(this.username + ' ' + this.email + ' ' + this.password);
      const headers = {
        'Content-Type': 'application/json',
      };
      const body = {};

      body.username = this.username;
      body.email = this.email;
      body.password = this.password;

      axios
        .post('/register', body, {
          headers: headers,
        })
        .then((res) => {
          console.log(res.data);
          this.created = true;
          setTimeout(() => {
            this.created = false;
            this.$router.push({
              name: 'Login',
            });
          }, 2000);
        })
        .catch((err) => {
          this.alreadyExists = true;
          setTimeout(() => {
            this.alreadyExists = false;
          }, 2000);
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
#register {
  width: 500px;
  margin: 50px auto;
}
</style>
