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
        <td>{{ getCategoryById(transaction.categoryId) }}</td>
        <td>{{ moment(String(transaction.date)).format('MM/DD/YYYY') }}</td>
        <td>{{ transactionsStore.coverAmount(transaction.montant) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
// import type { Category } from '@/entities/category'
// import type { Transaction } from '@/entities/transaction'
import { useTransactionStore } from '@/stores/transaction'
import { useCategoryStore } from '@/stores/category'
import moment from 'moment'

const transactionsStore = useTransactionStore()
const transactions = transactionsStore.transactions

const categoryStore = useCategoryStore()
const categories = categoryStore.categories

if (transactions.value.length === 0) {
  await fetch('http://localhost:3000/transactions')
    .then((res) => res.json())
    .then((data) => transactionsStore.setTransaction(data))
  console.log(transactions.value)
  await fetch('http://localhost:3000/categories')
    .then((res) => res.json())
    .then((data) => categoryStore.setCategory(data))
  console.log(categories)
}

const getCategoryById = (id: number) => {
  for (let i = 0; i < categories.value.length; i++) {
    if (categories.value[i].id == id) {
      console.log(id)
      return categories.value[i].name
    }
  }
}
</script>
