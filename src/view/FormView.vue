<template>
  <RouterLink to="/"><button>Annuler</button></RouterLink>
  <p>Solde du compte : {{}}</p>
  <Spending @save="onNewTransaction" />
</template>

<script setup lang="ts">
import Spending from '@/components/Spending.vue'
import router from '@/router'
import { useTransactionStore } from '@/stores/transaction'

const transactionStore = useTransactionStore()

const onNewTransaction = (itemAdd: any) => {
  transactionStore.addTransaction(itemAdd)
  router.push('/')
}
</script>
