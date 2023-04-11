import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Category } from '@/entities/category'

export const useCategoryStore = defineStore('category', function () {
  const category = ref<Category[]>([])

  const addNewCategory = (itemAdd: any) => {
    category.value.push({
      id: category.value.length === 0 ? 1 : Math.max(...category.value.map((t) => t.id)) + 1,
      name: itemAdd
    })
  }

  return {
    category,
    addNewCategory
  }
})
