<template>
  <div>
    <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> =
      {{ $store.getters.counterSquared }}
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
