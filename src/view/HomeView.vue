<template>
  <TableTransaction />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TableTransaction from '@/components/TableTransaction.vue'

export default defineComponent({
  components: {
    TableTransaction
  },
  setup(props) {
    return {
      TableTransaction
    }
  }
})
</script>
