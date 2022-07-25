<template>
  <div class="container">
    <button type="button" @click="toggleFlag">
      Toggle
    </button>
    <!-- <transition name="fade" mode="out-in">
      <h1 v-if="flag" key="main">Hello world</h1>
      <h1 v-else key="secondary">Else</h1>
    </transition> -->
    <transition name="zoom">
      <h2 v-if="flag">Hello</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
    }
  },
  methods: {
    toggleFlag() {
      this.flag = !this.flag
    }
  },
}
</script>

<style >
.container {
  height: 300px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: crimson;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;

}

h2 {
  width: 400px;
  padding: 20px;

}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;

}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;

}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }

  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }

  to {
    transform: scale(0, 0);
  }
}
</style>