<template>
  <div>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">This is a Red String from data</p>'
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
