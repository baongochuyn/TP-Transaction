<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Description</th>
        <th>Date</th>
        <th>Montant</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(transaction, index) in transactions" :key="index">
        <td>{{ transaction.id }}</td>
        <td>{{ transaction.description }}</td>
        <td>{{ convertDate(transaction.date) }}</td>
        <td>{{ coverAmount(transaction.amount) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { inject, computed, type Ref } from 'vue'

interface Transaction {
  id: number
  description: string
  date: Date
  amount: bigint
}

export default defineComponent({
  setup() {
    const transactions = inject<{ transactions: Ref<Transaction[]> }>('transactions')!.transactions

    console.log(transactions)
    const convertDate = (date: number | Date | undefined) => {
      return Intl.DateTimeFormat('fr-FR').format(date)
    }

    const coverAmount = (amount: bigint) => {
      console.log(transactions)
      console.log(amount)
      return Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount)
    }

    return {
      transactions,
      convertDate,
      coverAmount
    }
  }
})
</script>
