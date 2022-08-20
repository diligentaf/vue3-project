<template>
  <div>
    <!-- <input
      type="search"
      name=""
      id=""
      @keypress="checkEnter($event)"
      v-model="searchText"
    /> -->
    <input type="search" @keypress.enter="doSearch" v-model="searchText" />
    <button @click="doSearch">조회</button>
    <button type="submit" @click.prevent="doSearch">clik.prevent search</button>
  </div>
</template>
<script>
// .enter
// .tab
// .delete
// .esc
// .space
// .up
// .down
// .left
// .right
// .ctrl
export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  created() {},
  mounted() {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter(event) {
      console.log('you pressed enter')
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
