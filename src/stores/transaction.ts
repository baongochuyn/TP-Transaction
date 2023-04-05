import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Transaction } from '../entities/transaction'

export const useTransactionStore = defineStore('transaction', function () {
  const transaction = ref<Transaction[]>([])
})
