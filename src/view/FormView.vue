<template>
  <RouterLink to="/"><button>Annuler</button></RouterLink>
  <Spending @save="onNewTransaction" />
</template>

<script setup lang="ts">
import Spending from '@/components/Spending.vue'
import router from '@/router'
import { useTransactionStore } from '@/stores/transaction'
import { ref } from 'vue'

const transactionStore = useTransactionStore()

const onNewTransaction = (itemAdd: any) => {
  transactionStore.addTransaction(itemAdd)
  router.push('/')
}

const total = transactionStore.total
</script>
