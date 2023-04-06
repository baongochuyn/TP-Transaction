<template>
  <h1>Liste des transactions</h1>
  <TableTransaction />
  <RouterLink to="/new-transaction"><button>Ajouter une transaction</button></RouterLink>
  <RouterLink to="/new-category"><button>Ajouter une catégory</button></RouterLink>
</template>

<script setup lang="ts">
import TableTransaction from '@/components/TableTransaction.vue'
</script>
