import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Transaction } from '../entities/transaction'
import { Category } from '@/entities/category'

export const useTransactionStore = defineStore('transaction', function () {
  const transaction = ref<Transaction[]>([])

  const setTransaction = (iTransaction: any) => {
    console.log(iTransaction)
    transaction.value = iTransaction
  }

  const convertDate = (date: number | Date | undefined) => {
    return Intl.DateTimeFormat('fr-FR').format(date)
  }
  const coverAmount = (amount: bigint) => {
    const res = Number(amount) / 100
    return Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(res)
  }
  const addTransaction = (itemAdd: any) => {
    console.log(itemAdd)
    transaction.value.push({
      id: transaction.value.length === 0 ? 1 : Math.max(...transaction.value.map((t) => t.id)) + 1,
      categoryId: itemAdd.category,
      description: itemAdd.description,
      date: new Date(itemAdd.date),
      montant: BigInt(itemAdd.amount)
    })
    console.log(transaction.value)
  }

  const totalByCategory = (category: number) => {
    let sum = BigInt(0)

    for (let i = 0; i < transaction.value.length; i++) {
      if (transaction.value[i].categoryId == Number(category)) {
        sum += BigInt(transaction.value[i].montant)
      }
    }
    return coverAmount(sum)
  }

  const total = computed(() => {
    let total = BigInt(0) // Khởi tạo giá trị tổng ban đầu là 0 với kiểu BigInt

    for (let i = 0; i < transaction.value.length; i++) {
      total += BigInt(transaction.value[i].montant) // Cộng dồn giá trị của từng transaction.amount vào tổng
    }
    return total
  })

  const transactions = computed(() => transaction)
  return {
    coverAmount,
    setTransaction,
    addTransaction,
    transactions,
    total,
    totalByCategory
  }
})
