<template>
  <nav>
    <h1>Data Binding 👇</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding/string">String</router-link> |
    <router-link to="/databinding/html">Html</router-link> |
    <router-link to="/databinding/input">Input</router-link> |
    <router-link to="/databinding/select">Select</router-link> |
    <router-link to="/databinding/checkbox">Checkbox</router-link> |
    <router-link to="/databinding/radio">Radio</router-link> |
    <router-link to="/databinding/attribute">Attribute</router-link> |
    <router-link to="/databinding/list">List</router-link> |
    <router-link to="/databinding/class">Class</router-link> |
    <router-link to="/databinding/style">Style</router-link>
    <br>
    <br>
    <h1>Event 👇</h1>
    <router-link to="/event/click">Event Click</router-link> |
    <router-link to="/event/change">Event Change</router-link> |
    <router-link to="/event/key">Event Key</router-link> |
    <br>
    <br>
    <h1>Vuex 👇</h1>
    <router-link to="/vuex/home">Vuex Home</router-link> |
    <h1>Keplr 👇</h1>
    <router-link to="/keplr/osmo">Connecting to Keplr</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
