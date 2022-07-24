<template>
  <div>
    <h1>{{ name }}</h1>
    <button @click="doSomenthing">alog</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  created() {
    this.message()
  },
  data() {
    return {};
  },
  props: {
    name: String
  },
  methods: {
    message() {
      // alert("MENSAGEM QUALQUER")
    },
    doSomenthing() {
      this.$emit("so")
      console.log("JKLGJFKLGJG");
      this.name + 1
    }
  },
};
</script>

<style  scoped>
</style>