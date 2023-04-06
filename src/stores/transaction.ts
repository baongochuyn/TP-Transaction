import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Transaction } from '../entities/transaction'

export const useTransactionStore = defineStore('transaction', function () {
  const transaction = ref<Transaction[]>([])
  const newId = Number(
    transaction.value.length === 0 ? 1 : Math.max(...transaction.value.map((t) => t.id)) + 1
  )
  const addTransaction = (itemAdd: any) => {
    transaction.value.push({
      id: newId,
      category: '',
      description: itemAdd.description,
      date: new Date(itemAdd.date),
      amount: BigInt(itemAdd.amount)
    })
  }

  const total = computed(() => {
    const value = transaction.value.reduce(
      (acc, transaction) => acc + transaction.amount,
      BigInt(0)
    )
    return value
  })

  return {
    addTransaction,
    transaction,
    total
  }
})
