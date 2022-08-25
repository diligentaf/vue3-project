<template>
  <div>
    <h1>{{balance}} $OSMO</h1>
  </div>
</template>
<script>
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

export default {
  name: 'VuexView',
  components: {},
  data() {
    return {
      balance: 0
    }
  },
  created() {},
  mounted() {
    this.connectKeplr()
  },
  methods: {
    async connectKeplr() {
      if (!window.keplr) {
        alert('Please install keplr extension')
      } else {
        const chainId = 'osmosis-1'
        await window.keplr.enable(chainId)
        const offlineSigner = window.keplr.getOfflineSigner(chainId)
        const accounts = await offlineSigner.getAccounts()

        const CosmWasmClient = await SigningCosmWasmClient.connectWithSigner(
          'https://rpc-osmosis.blockapsis.com',
          offlineSigner
        )
        const balance = await CosmWasmClient.getBalance(
          accounts[0].address,
          'uosmo'
        )
        this.balance = balance.amount / 1000000
      }
    }
  }
}
</script>

<style scoped>
div {
  margin-buttom: 10px;
}
</style>
