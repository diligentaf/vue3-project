<template>
  <div>
    <div :style="{ color: $store.state.colorCode }" class="counter">
      {{ $store.state.counter }}
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

<style scoped>
.counter {
  font-size: 80px;
}
</style>
