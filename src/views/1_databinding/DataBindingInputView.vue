<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="myFunction">click this</button>
    <button @click="changeData">change data</button>
    <br />
    <input type="text" v-model="num1" /> +
    <input type="text" v-model="num2" /> =
    <span>{{ num1 + num2 }}</span>
    <br />
    <input type="text" v-model.number="num3" /> +
    <input type="text" v-model.number="num4" /> =
    <span>{{ num3 + num4 }}</span>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'daf.go',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  created() {},
  mounted() {},
  methods: {
    myFunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'bibibig'
    }
  }
}
</script>
