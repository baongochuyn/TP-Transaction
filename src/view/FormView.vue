<template>
  <RouterLink to="/"><button>Annuler</button></RouterLink>
  <Spending @save="onNewTransaction" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Spending from '@/components/Spending.vue'
import { inject, computed, type Ref } from 'vue'
import router from '@/router'
import { useTransactionStore } from '@/stores/transaction'

export default defineComponent({
  components: {
    Spending
  },
  setup() {
    //const { addTransaction } = inject<{ addTransaction: (itemAdd: any) => void }>('transactions') ?? { addTransaction: () => { throw new Error('Cannot find addTransaction') } }

    // const addTransaction = inject<{ addTransaction: (itemAdd) => void }>(
    //   'transactions'
    // )!.addTransaction
    const transactionStore = useTransactionStore()

    const onNewTransaction = (itemAdd: any) => {
      transactionStore.addTransaction(itemAdd)
      router.push('/')
    }
    return {
      Spending,
      onNewTransaction
    }
  }
})
</script>
