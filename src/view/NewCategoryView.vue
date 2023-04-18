<template>
  <RouterLink to="/"><button class="btn">Annuler</button></RouterLink>
  <CategotyForm @new-category="onNewCategory" />
</template>

<script setup lang="ts">
import CategotyForm from '@/components/CategoryForm.vue'
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()

const onNewCategory = (name) => {
  categoryStore.addNewCategory(name)
}
</script>
