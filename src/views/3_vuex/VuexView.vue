<template>
  <div>
    <!-- <div :style="{ color: $store.state.colorCode }" class="counter">
      {{ $store.state.counter }}
    </div> -->
    <Counter />

    <!-- <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> =
      {{ $store.getters.counterSquared }}
    </div> -->
    <CounterSquared />

    <!-- <div class="buttons">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div> -->
    <Buttons />

    <ColorCode />

  </div>
</template>
<script>
import Counter from '@/components/counter/Counter.vue'
import CounterSquared from '@/components/counter/CounterSquared.vue'
import Buttons from '@/components/counter/Buttons.vue'
import ColorCode from '@/components/counter/ColorCode.vue'

export default {
  name: 'VuexView',
  components: {
    Counter,
    CounterSquared,
    Buttons,
    ColorCode
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped>
div {
  margin-buttom: 10px;
}
</style>
