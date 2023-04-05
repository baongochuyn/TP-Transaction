<template>
  <h1>Liste des transactions</h1>
  <TableTransaction />
  <RouterLink to="/new-transaction"><button>Ajouter une transaction</button></RouterLink>
  <RouterLink to="/new-category"><button>Ajouter une catégory</button></RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TableTransaction from '@/components/TableTransaction.vue'
import { inject, computed, ref } from 'vue'

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
