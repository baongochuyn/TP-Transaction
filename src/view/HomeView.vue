<template>
  <h1>Liste des transactions</h1>
  <TableTransaction />
  <p>Solde du compte : {{ total }}</p>
  <RouterLink to="/new-transaction"><button>Ajouter une transaction</button></RouterLink>
  <RouterLink to="/new-category"><button>Ajouter une catégory</button></RouterLink>
</template>

<script setup lang="ts">
import TableTransaction from '@/components/TableTransaction.vue'
import { useTransactionStore } from '@/stores/transaction'

const transactionStore = useTransactionStore()

const total = transactionStore.total
</script>
