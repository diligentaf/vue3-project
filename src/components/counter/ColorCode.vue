<template>
  <div>
    <div>
      <!-- <input placeholder="Enter color code" type="text" v-model="$store.state.colorCode"> -->
      <!-- NOTE: the code above works but we are not supposed to use it like that. Needs to go through mutation -->
      <input placeholder="Enter color code" type="text" v-model="colorCode" />
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
  methods: {},
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode
      },
      set(newValue) {
        this.$store.dispatch('setColorCode', newValue)
      }
    }
  }
}
</script>
