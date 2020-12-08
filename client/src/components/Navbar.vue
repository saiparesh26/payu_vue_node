<template>
  <nav
    class="navbar has-background-grey-lighter"
    role="navigation"
    aria-label="main navigation"
  >
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/register" v-if="!isLoggedIn"
              ><a class="button is-primary mr-2">
                <strong>Register</strong>
              </a></router-link
            >
            <router-link to="/" v-if="!isLoggedIn"
              ><a class="button is-light">
                Log in
              </a></router-link
            >
            <router-link to="/" v-if="isLoggedIn"
              ><a class="button is-light" @click="logout">
                Log Out
              </a></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  mounted() {
    window.onbeforeunload = function() {
      localStorage.clear();
    };
  },
  methods: {
    logout() {
      this.$store.commit('changeLoginStatus', false);

      this.$store.commit('setToken', null);
      localStorage.removeItem('token');
    },
  },
};
</script>

<style scoped></style>
