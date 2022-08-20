<template>
  <div>
    <div>
      <!-- NOTE: radio only takes one... data needs to be string -->
      <input type="radio" name="" id="html" value="HTML clicked" v-model="favoriteLange" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" name="" id="css" value="CSS added" v-model="favoriteLange" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="radio" name="" id="js" value="JS is the best" v-model="favoriteLange" />
      <label for="js">JavaScript</label>
    </div>
    <div>Select Language(s): {{ favoriteLange }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLange: ''
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
