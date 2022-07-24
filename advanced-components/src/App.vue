<template>
  {{ name }}
  <Header :name="name" @so="so" />
</template>

<script>


import Header from './components/Header.vue'
export default {
  name: 'App',
  data() {
    return {
      name: "APP"
    }
  },
  methods: {
    so() {
      console.log("SOOSJS");
      this.name = this.name + "1"

    }
  },
  components: {
    Header
  }
}
</script>

<style lang="scss">
$color: #333;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  margin-top: 60px;
}
</style>
