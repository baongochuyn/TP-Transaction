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
        <td>{{ moment(String(transaction.date)).format('DD/MM/YYYY') }}</td>
        <td>{{ transactionStore.coverAmount(transaction.montant) }}</td>
      </tr>
    </tbody>
  </table>
  <p id="total">Solde du compte : {{ total }}</p>
  <ul>
    <li v-for="(item, index) in categoryStore.categories.value" :key="index">
      {{ item.name }} : {{ transactionStore.totalByCategory(item.id) }}
    </li>
  </ul>
</template>

<script setup lang="ts">
// import type { Category } from '@/entities/category'
// import type { Transaction } from '@/entities/transaction'
import { useTransactionStore } from '@/stores/transaction'
import { useCategoryStore } from '@/stores/category'
import moment from 'moment'

const transactionStore = useTransactionStore()
const transactions = transactionStore.transactions

const categoryStore = useCategoryStore()
const categories = categoryStore.categories

if (transactions.value.length === 0) {
  await fetch('http://localhost:3000/transactions')
    .then((res) => res.json())
    .then((data) => transactionStore.setTransaction(data))
  console.log(transactions.value)
  await fetch('http://localhost:3000/categories')
    .then((res) => res.json())
    .then((data) => categoryStore.setCategory(data))
  console.log(categories)
}

const getCategoryById = (id: number) => {
  for (let i = 0; i < categories.value.length; i++) {
    if (categories.value[i].id == id) {
      return categories.value[i].name
    }
  }
}
const total = transactionStore.coverAmount(transactionStore.total)
</script>
