import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTransactionStore = defineStore('transaction', function () {
  const transaction = ref<Transaction[]>([])
})
