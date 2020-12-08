<template>
  <div id="login">
    <h1 class="title is-2 has-text-centered">Login</h1>
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
        @click="login"
      >
        Login
      </button>
    </div>
    <div class="notification mt-2" v-if="error">
      <strong>Wrong Email or Password</strong>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: null,
      password: null,
      error: null,
    };
  },
  computed: {
    isNotEmpty() {
      return this.email && this.password;
    },
  },
  methods: {
    login() {
      const headers = {
        'Content-Type': 'application/json',
      };
      const body = {};

      body.email = this.email;
      body.password = this.password;

      axios
        .post('/login', body, {
          headers: headers,
        })
        .then((res) => {
          // console.log(res.data.token);
          this.$store.commit('changeLoginStatus', true);
          this.$store.commit('setToken', res.data.token);

          this.$router.push({
            name: 'Home',
          });
        })
        .catch((err) => {
          console.log(err);
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 2000);
        });
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  margin: 50px auto;
}
</style>
