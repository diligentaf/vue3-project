<template>
  <div>
    <div>
      <select name="" id="">
        <option value=""></option>
        <option value=""></option>
        <option :value="city.code" :key="city.code" v-for="city in cities">
          {{ city.title }}
        </option>
        <option value=""></option>
      </select>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Number</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr :key="i" v-for="(drink, i) in drinkList"></tr> -->
          <!-- NOTE: this same code as above-->
          <tr :key="drink.drinkId" v-for="drink in drinkList">
            <td>{{ drink.drinkId }}</td>
            <td>{{ drink.drinkName }}</td>
            <td>{{ drink.price }}</td>
            <td><input type="number" name="" id="" v-model="drink.qty"></td>
            <td>{{ drink.price * drink.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cities: [
        { title: 'Seoul', code: '02' },
        { title: 'Busan', code: '051' },
        { title: 'Jeju', code: '064' }
      ],
      drinkList: [
        {
          drinkId: '1',
          drinkName: 'Coca-Cola',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: 'Orange Juice',
          price: 1200,
          qty: 7
        },
        {
          drinkId: '3',
          drinkName: 'Coffee',
          price: 500,
          qty: 5
        },
        {
          drinkId: '4',
          drinkName: 'Fanta',
          price: 900,
          qty: 2
        },
        {
          drinkId: '5',
          drinkName: 'Sprite',
          price: 200,
          qty: 9
        },
        {
          drinkId: '6',
          drinkName: 'Welches',
          price: 800,
          qty: 19
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
