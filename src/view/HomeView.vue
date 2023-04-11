<template>
  <h1>Liste des transactions</h1>
  <TableTransaction />
  <p>Solde du compte : {{ total }}</p>
  <ul>
    <li v-for="(item, index) in categoryStore.category" :key="index">
      {{ item.name }} : {{ transactionStore.totalByCategory(item.name) }} €
    </li>
  </ul>
  <RouterLink to="/new-transaction"><button>Ajouter une transaction</button></RouterLink>
  <RouterLink to="/new-category"><button>Ajouter une catégory</button></RouterLink>
</template>

<script setup lang="ts">
import TableTransaction from '@/components/TableTransaction.vue'
import { useTransactionStore } from '@/stores/transaction'
import { useCategoryStore } from '@/stores/category'

const transactionStore = useTransactionStore()
const categoryStore = useCategoryStore()
const total = transactionStore.total
</script>
