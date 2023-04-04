<template>
  <div>Hello Form</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { inject } from 'vue'
interface Transaction {
  id: number
  description: string
  date: Date
  amount: bigint
}

export default defineComponent({
  props: {
    transactions: {
      type: Array as PropType<Transaction[]>,
      required: true
    }
  },
  setup(props) {
    const a = inject['transactions']
    console.log(a)
    return {}
  }
})
</script>
