<template>
  <CategotyForm @new-category="onNewCategory" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CategotyForm from '@/components/CategoryForm.vue'
import { inject, computed, ref } from 'vue'

export default defineComponent({
  components: {
    CategotyForm
  },
  setup(props) {
    const onNewCategory = (name) => {
      console.log(name)
    }
    return {
      CategotyForm,
      onNewCategory
    }
  }
})
</script>
