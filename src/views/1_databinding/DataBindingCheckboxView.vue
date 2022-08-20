<template>
  <div>
    <div>
      <!-- NOTE: check box is not mapped with v-model... it's mapped with checked (boolean) -->
      <input type="checkbox" name="" id="html" value="HTML clicked" v-model="favoriteLange" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" name="" id="css" value="CSS added" v-model="favoriteLange" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" name="" id="js" value="JS" v-model="favoriteLange" />
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
      favoriteLange: []
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
