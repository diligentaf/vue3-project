<template>
  <div>
    <select name="" id="" @change="changeCity($event)" v-model="selectedCity">
      <option value="">== Select City ==</option>
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in cityList"
      >
        {{ city.title }}
      </option>
    </select>
    <select name="" id="">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in selectedDongList"
      >
        {{ dong.dongTitle }}
      </option>
    </select>

    <br/><br/>

    <select name="" id="">
      <option
        :value="dong.dongCode"
        :key="dong.dongCode"
        v-for="dong in dongList.filter(dong => dong.cityCode === this.selectedCity)"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cityList: [
        { cityCode: '02', title: 'Seoul' },
        { cityCode: '051', title: 'Busan' },
        { cityCode: '064', title: 'Jeju' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: 'Seoul 1 Dong' },
        { cityCode: '02', dongCode: '2', dongTitle: 'Seoul 2 Dong' },
        { cityCode: '02', dongCode: '3', dongTitle: 'Seoul 3 Dong' },
        { cityCode: '02', dongCode: '4', dongTitle: 'Seoul 4 Dong' },
        { cityCode: '051', dongCode: '1', dongTitle: 'Busan 1 Dong' },
        { cityCode: '051', dongCode: '2', dongTitle: 'Busan 2 Dong' },
        { cityCode: '051', dongCode: '3', dongTitle: 'Busan 3 Dong' },
        { cityCode: '064', dongCode: '1', dongTitle: 'Jeju 1 Dong' },
        { cityCode: '064', dongCode: '2', dongTitle: 'Jeju 2 Dong' },
        { cityCode: '064', dongCode: '3', dongTitle: 'Jeju 3 Dong' },
        { cityCode: '064', dongCode: '4', dongTitle: 'Jeju 4 Dong' }
      ],
      selectedDongList: [],
      selectedCity: ''
    }
  },
  created() {},
  mounted() {},
  methods: {
    changeCity(event) {
      console.log(event.target.tagName)
      this.selectedDongList = this.dongList.filter(dong => dong.cityCode === this.selectedCity)
    }
  }
}
</script>
