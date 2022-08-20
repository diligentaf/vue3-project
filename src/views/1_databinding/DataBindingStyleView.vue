<template>
  <div>
    <div style="color: red; font-size: 30px">
      Style Binding: Font is red, Font Size: 30px
    </div>
    <div :style="style1">
      Style Binding: Font is {{style1.color}}, Font Size: {{style1.fontSize}}
    </div>
    <button @click="style1.color='blue'">change color</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      style1: {
        color: 'green',
        fontSize: '50px'
      }
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
