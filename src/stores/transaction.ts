import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Transaction } from '../entities/transaction'
import { Category } from '@/entities/category'

export const useTransactionStore = defineStore('transaction', function () {
  const transaction = ref<Transaction[]>([])

  const addTransaction = (itemAdd: any) => {
    transaction.value.push({
      id: transaction.value.length === 0 ? 1 : Math.max(...transaction.value.map((t) => t.id)) + 1,
      category: itemAdd.category,
      description: itemAdd.description,
      date: new Date(itemAdd.date),
      amount: BigInt(itemAdd.amount)
    })
  }

  const totalByCategory = (category: string) => {
    let sum = BigInt(0)

    for (let i = 0; i < transaction.value.length; i++) {
      if (transaction.value[i].category == category) {
        sum += BigInt(transaction.value[i].amount)
      }
    }
    return sum
  }
  const total = computed(() => {
    let total = BigInt(0) // Khởi tạo giá trị tổng ban đầu là 0 với kiểu BigInt

    for (let i = 0; i < transaction.value.length; i++) {
      total += BigInt(transaction.value[i].amount) // Cộng dồn giá trị của từng transaction.amount vào tổng
    }
    return total
  })

  return {
    addTransaction,
    transaction,
    total,
    totalByCategory
  }
})
