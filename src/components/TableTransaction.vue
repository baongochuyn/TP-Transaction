<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Description</th>
        <th>Catégory</th>
        <th>Date</th>
        <th>Montant</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(transaction, index) in transactions" :key="index">
        <td>{{ transaction.id }}</td>
        <td>{{ transaction.description }}</td>
        <td>{{ transaction.category }}</td>
        <td>{{ convertDate(transaction.date) }}</td>
        <td>{{ coverAmount(transaction.amount) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useTransactionStore } from '@/stores/transaction'

const transactionsStore = useTransactionStore()
const transactions = transactionsStore.transaction
console.log(transactions)
const convertDate = (date: number | Date | undefined) => {
  return Intl.DateTimeFormat('fr-FR').format(date)
}

const coverAmount = (amount: bigint) => {
  return Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount)
}
</script>
