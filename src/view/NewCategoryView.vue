<template>
  <CategotyForm @new-category="onNewCategory" />
</template>

<script setup lang="ts">
import CategotyForm from '@/components/CategoryForm.vue'

const onNewCategory = (name) => {
  console.log(name)
}
</script>
