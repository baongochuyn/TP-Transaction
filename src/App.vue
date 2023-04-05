<template>
  <div>
    <p>Solde du compte : {{ total }}</p>
    <!-- <Spending @save="clickAdd" /> -->
    <!-- <TableTransaction :transactions="transactions" /> -->
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
import { reactive, ref, computed } from 'vue'
import Spending from './components/Spending.vue'
import TableTransaction from './components/TableTransaction.vue'
import { provide } from 'vue'

//console.log(transactions);
export default {
  components: {
    Spending,
    TableTransaction
  },
  setup() {
    const transactions = reactive([
      { id: 1, description: 'Salaire', date: new Date('2023-1-1'), amount: BigInt(1000) },
      { id: 2, description: 'Vente de produit', date: new Date('2023-2-1'), amount: BigInt(-500) },
      { id: 3, description: 'Remboursement', date: new Date('2023-3-1'), amount: BigInt(200) },
      { id: 4, description: 'Paiement mensuel', date: new Date('2023-3-2'), amount: BigInt(-800) },
      { id: 5, description: 'Dépôt en espèces', date: new Date('2023-3-3'), amount: BigInt(500) }
    ])

    const addTransaction = (itemAdd: any) => {
      transactions.push({
        id: Math.max(...transactions.map((t) => t.id)) + 1,
        description: itemAdd.description,
        date: new Date(itemAdd.date),
        amount: BigInt(itemAdd.amount)
      })
    }

    provide('transactions', {
      transactions: transactions,
      addTransaction: addTransaction
    })

    const totalSpending = computed(() => {
      const value = transactions.reduce((acc, transaction) => acc + transaction.amount, BigInt(0))
      return value
    })
    return {
      addTransaction,
      transactions,
      total: totalSpending
    }
  }
}
</script>

<style>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
table td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}
table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
