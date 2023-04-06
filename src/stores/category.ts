import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Category } from '@/entities/category'

export const useCategoryStore = defineStore('category', function () {
  const category = ref<Category[]>([])

  const addNewCategory = (itemAdd: any) => {
    category.value.push(itemAdd)
  }

  return {
    category,
    addNewCategory
  }
})
