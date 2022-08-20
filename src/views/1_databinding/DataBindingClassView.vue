<template>
  <div>
    <div :class="{ 'text-red': hasError, 'active': isActive }">Class Binding</div>
    <br/>
    <div :class="class2">Class Binding 2</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isActive: true,
      hasError: true,
      class2: ['active', 'hasError']
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.active {
  background-color: greenyellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
