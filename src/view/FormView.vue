<template>
  <RouterLink to="/"><button>Annuler</button></RouterLink>
  <Spending @save="onNewTransaction" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Spending from '@/components/Spending.vue'
import { inject, computed, type Ref } from 'vue'
import router from '@/router'

export default defineComponent({
  components: {
    Spending
  },
  setup(props) {
    //const { addTransaction } = inject<{ addTransaction: (itemAdd: any) => void }>('transactions') ?? { addTransaction: () => { throw new Error('Cannot find addTransaction') } }

    const addTransaction = inject<{ addTransaction: (itemAdd) => void }>(
      'transactions'
    )!.addTransaction
    const onNewTransaction = (itemAdd: any) => {
      addTransaction(itemAdd)
      router.push('/')
    }
    return {
      Spending,
      onNewTransaction
    }
  }
})
</script>
