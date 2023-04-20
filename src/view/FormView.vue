<template>
  <RouterLink to="/"><button class="btn">Annuler</button></RouterLink>
  <Spending @save="onNewTransaction" />
</template>

<script setup lang="ts">
import Spending from '@/components/Spending.vue'
import router from '@/router'
import { useTransactionStore } from '@/stores/transaction'
import { ref } from 'vue'

const transactionStore = useTransactionStore()

const onNewTransaction = (itemAdd: any) => {
  itemAdd.amount = itemAdd.amount * 100
  transactionStore.addTransaction(itemAdd)
  router.push('/')
}

const total = transactionStore.total
</script>
