<template>
  <div id="app">
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <template #footer="{}">
       <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
        <b-button size="sm" @click="$store.state.loggedIn=false; $router.push('/login')">Log Out</b-button>
       </div>
      </template>
      <div class="px-3 py-2">
        <p>
          Dies ist eine Test-Sidebar.
        </p>
        <b-img src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
    <div id="nav">
      <router-link to="/" v-if="$store.state.loggedIn">Home</router-link>
      <span v-if="$store.state.loggedIn"> | </span>
      <router-link to="/about" v-if="$store.state.loggedIn">About</router-link>
      <span v-if="$store.state.loggedIn"> | </span>
      <router-link to="/login" v-if="!$store.state.loggedIn">Log in</router-link>
      <span v-b-toggle.sidebar-1 v-if="$store.state.loggedIn">Sidebar</span>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
