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
import type { PropType } from 'vue'

interface Transaction {
  id: number
  description: string
  date: Date
  amount: bigint
}

export default defineComponent({
  props: {
    transactions: {
      type: Array as PropType<Transaction[]>,
      required: true
    }
  },
  setup(props) {
    const convertDate = (date: number | Date | undefined) => {
      return Intl.DateTimeFormat('fr-FR').format(date)
    }

    const coverAmount = (amount: bigint) => {
      return Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount)
    }

    return {
      convertDate,
      coverAmount
    }
  }
})
</script>
